import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import Home from "@/models/homeModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, phone, email, lookingFor, state } = await req.json();

    // Validate required fields
    if (!name || !phone || !email || !lookingFor || !state) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("YYYY-MM-DD");
    const time = moment().format("HH:mm:ss");

    // Send the email
    const sendEMail = await sendEmail({
      subject: `${lookingFor} Enquiry Request from ${name}`,
      text: `<p>${lookingFor} Enquiry Request,</p>
<p>You received an enquiry from:</p>
<ul>
  <li>Name: ${name}</li>
  <li>Phone: ${phone}</li>
  <li>Email: ${email}</li>
  <li>Looking For: ${lookingFor}</li>
  <li>State: ${state}</li>
  <li>Date: ${date}</li>
  <li>Time: ${time}</li>
</ul>`,
      to: state && state === "Odisha" ? "" : "",
      name,
      phone,
    });

    // Create and save a new Home document in MongoDB
    const newHome = new Home({
      name,
      phone,
      email,
      lookingFor,
      state,
      date,
      time,
    });
    await newHome.save();

    // Return success response
    return new NextResponse(
      JSON.stringify({
        message: "Home enquiry details submitted successfully",
        status: true,
      }),
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Error:", err.message);
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const rangeValue = searchParams.get("rangeValue");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    console.log(rangeValue, startDate, endDate);

    let filter: any = { isDeleted: false };

    switch (rangeValue) {
      case "today":
        filter.date = moment().format("YYYY-MM-DD");
        break;

      case "yesterday":
        filter.date = moment().subtract(1, "day").format("YYYY-MM-DD");
        break;

      case "thisMonth":
        filter.date = {
          $gte: moment().startOf("month").format("YYYY-MM-DD"),
          $lte: moment().endOf("month").format("YYYY-MM-DD"),
        };
        break;

      case "lastMonth":
        filter.date = {
          $gte: moment()
            .subtract(1, "month")
            .startOf("month")
            .format("YYYY-MM-DD"),
          $lte: moment()
            .subtract(1, "month")
            .endOf("month")
            .format("YYYY-MM-DD"),
        };
        break;

      case "last3Months":
        filter.date = {
          $gte: moment()
            .subtract(3, "months")
            .startOf("month")
            .format("YYYY-MM-DD"),
          $lte: moment().endOf("month").format("YYYY-MM-DD"),
        };
        break;

      case "last6Months":
        filter.date = {
          $gte: moment()
            .subtract(6, "months")
            .startOf("month")
            .format("YYYY-MM-DD"),
          $lte: moment().endOf("month").format("YYYY-MM-DD"),
        };
        break;

      case "last12Months":
        filter.date = {
          $gte: moment()
            .subtract(12, "months")
            .startOf("month")
            .format("YYYY-MM-DD"),
          $lte: moment().endOf("month").format("YYYY-MM-DD"),
        };
        break;

      case "Between":
        if (startDate && endDate) {
          filter.date = {
            $gte: moment(startDate).format("YYYY-MM-DD"),
            $lte: moment(endDate).format("YYYY-MM-DD"),
          };
        } else {
          return new NextResponse(
            JSON.stringify({ error: "Start date and End date are required" }),
            { status: 400 }
          );
        }
        break;

      case "allData":
      default:
        // No date filter for all data
        filter = { isDeleted: false };
        break;
    }

    // Fetch the filtered data from the database
    const enquiries = await Home.find(filter).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(enquiries), { status: 200 });
  } catch (err: any) {
    console.error("Error:", err.message);
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
