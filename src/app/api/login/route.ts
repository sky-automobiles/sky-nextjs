import { connectDB } from "@/dbConfig/dbConfig";
import Admin from "@/models/modelAdmin";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Check user
    const userData = await Admin.findOne({
      email,
      isDeleted: false,
    });

    if (!userData) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Check password
    const validPassword = await bcrypt.compare(
      password,
      userData.password
    );

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Create token
    const tokenData = {
      id: userData._id,
    };

    const token = jwt.sign(
      tokenData,
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // ✅ Create response
    const response = NextResponse.json({
      status: "success",
      data: userData,
      isAdmin: true,
      message: "Login successful",
    });

    // ✅ Set cookies (CORRECT WAY)
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
      path: "/",
    });

    response.cookies.set("isAdmin", "true", {
      secure: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 12 * 60 * 60 * 1000),
      path: "/",
    });

    return response;
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );
  }
}