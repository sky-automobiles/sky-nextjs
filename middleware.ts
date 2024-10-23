import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Add your middleware code here. This function must return a response object.
  const cookie = req.cookies.get("token");
  console.log("cookie", cookie);
  if (!cookie && req.url !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", req.url).toString(), 303);
  }
}
