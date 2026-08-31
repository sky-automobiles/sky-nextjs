import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  // token is httpOnly, so it can only be cleared server-side.
  response.cookies.set("token", "", { expires: new Date(0), path: "/" });
  response.cookies.set("isAdmin", "", { expires: new Date(0), path: "/" });

  return response;
}
