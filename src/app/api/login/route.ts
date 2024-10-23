import { connectDB } from "@/dbConfig/dbConfig";
import Admin from "@/models/modelAdmin";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDB();
    const reqBody = await req.json();
    const { email, password } = reqBody;
    if (!email || !password) {
      return NextResponse.json(
        { message: "Reqired fields are missing" },
        { status: 400 }
      );
    }

    //check if user exists
    let userData = await Admin.findOne({ email, isDeleted: false });

    if (!userData) {
      return NextResponse.json(
        { message: "Invalid credentials " },
        { status: 400 }
      );
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(password, userData.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    //create token data
    const tokenData = {
      id: userData._id,
      //   username: userData.username,
      //   email: userData.email,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const expireDuration = new Date(Date.now() + 12 * 60 * 60 * 1000);
    const cookieString = `token=${token}; expires = ${expireDuration}; path=/;`;

    const newHeader = new Headers(res.headers);
    newHeader.set("set-cookie", cookieString);

    const cookieString3 = `isAdmin=${true}; expires = ${expireDuration}; path=/;`;
    newHeader.append("set-cookie", cookieString3);

    return NextResponse.json(
      {
        status: "success",
        data: userData,
        isAdmin: true,
        message: "Login successful",
      },
      {
        status: 200,
        headers: newHeader,
      }
    );
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
