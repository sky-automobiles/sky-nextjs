import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function isAuthenticated(req: NextRequest): boolean {
  const token = req.cookies.get("token")?.value;
  if (!token) return false;

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return true;
  } catch {
    return false;
  }
}
