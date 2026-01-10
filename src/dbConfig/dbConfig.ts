import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
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
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        console.log("Connected to the database");
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
