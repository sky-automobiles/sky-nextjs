import { connectDB } from "@/dbConfig/dbConfig";
import Admin from "@/models/modelAdmin";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { phone } = reqBody;
    console.log(reqBody);
    if (!phone) {
      return NextResponse.json(
        { message: "Phone number is missing" },
        // { message: "Reqired fields are missing" },
        { status: 400 }
      );
    } else {
      const phoneExist = await Admin.findOne({ phone });
      if (phoneExist)
        return NextResponse.json(
          { message: "Phone number is already used" },
          // { message: "Reqired fields are missing" },
          { status: 400 }
        );
    }

    const encryptPass = await bcrypt.hash(reqBody.password, 10);
    reqBody.password = encryptPass;

    let saveData = await Admin.create(reqBody);

    // Return users with success status
    return NextResponse.json(
      { data: saveData, message: "success" },
      { status: 201 }
    );
  } catch (error) {
    // Handle any errors that occur during database query or processing
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
