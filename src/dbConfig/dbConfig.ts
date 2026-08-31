import dns from "dns";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

// Some local networks (VPNs, security software, Windows secure DNS) point
// Node's resolver at a loopback DNS proxy that refuses connections, which
// breaks the SRV/TXT lookups a mongodb+srv:// URI needs even though the OS's
// own resolver works fine. We do the SRV/TXT lookups ourselves against public
// resolvers and hand mongoose a plain mongodb:// URI, instead of relying on
// the driver's own (broken, in that case) SRV resolution.
async function resolveSrvUri(uri: string): Promise<string> {
  if (!uri.startsWith("mongodb+srv://")) return uri;

  try {
    const resolver = new dns.promises.Resolver();
    resolver.setServers(["8.8.8.8", "1.1.1.1"]);

    const parsed = new URL(uri);
    const host = parsed.hostname;

    const [srvRecords, txtRecords] = await Promise.all([
      resolver.resolveSrv(`_mongodb._tcp.${host}`),
      resolver.resolveTxt(host).catch(() => [] as string[][]),
    ]);

    const hosts = srvRecords
      .map((r) => `${r.name}:${r.port}`)
      .join(",");

    const txtOptions = new URLSearchParams(
      txtRecords.map((chunks) => chunks.join("")).join("&")
    );

    const params = new URLSearchParams(parsed.search);
    txtOptions.forEach((value, key) => {
      if (!params.has(key)) params.set(key, value);
    });
    if (!params.has("ssl") && !params.has("tls")) params.set("ssl", "true");

    const auth = parsed.username
      ? `${parsed.username}${parsed.password ? `:${parsed.password}` : ""}@`
      : "";

    return `mongodb://${auth}${hosts}${parsed.pathname}?${params.toString()}`;
  } catch (err) {
    // If our own resolution fails for any reason, fall back to letting the
    // driver try the original srv:// URI itself.
    console.error("Manual SRV resolution failed, falling back:", err);
    return uri;
  }
}

// Global cache (prevents multiple connections in Next.js)
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  // Reuse existing connection
  if (cached.conn) {
    return cached.conn;
  }

  // Create connection only once
  if (!cached.promise) {
    cached.promise = resolveSrvUri(MONGODB_URI)
      .then((resolvedUri) =>
        mongoose.connect(resolvedUri, {
          bufferCommands: false,
        })
      )
      .then((mongoose) => {
        console.log("Connected to the database");
        return mongoose;
      })
      .catch((err) => {
        // Don't leave a rejected promise cached, or every future call
        // would keep failing with this same error until the process restarts.
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
