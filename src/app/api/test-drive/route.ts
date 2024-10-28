import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import TestDrive from "@/models/testDriveModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, phone, email, model, outlet, state } = await req.json();

    console.log(name, phone, email, model, outlet, state);
    // Validate required fields
    if (!name || !phone || !email || !model || !outlet || !state) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    let channel = "";

    if (
      model === "ALTO K10" ||
      model === "Swift" ||
      model === "Epic swift 2024" ||
      model === "Brezza" ||
      model === "Dzire" ||
      model === "S-Presso" ||
      model === "WagonR" ||
      model === "Ertiga" ||
      model === "Celerio" ||
      model === "Eeco"
    ) {
      channel = "Arena";
    } else channel = "Nexa";

    // Get current date and time
    const date = moment().format("YYYY-MM-DD");
    const time = moment().format("HH:mm:ss");

    
    const sendEMail = await sendEmail({
      subject: `New ${model} Test Drive Enquiry Request from ${name}`,
      text: `<p>Test Drive Enquiry,</p>
<p>You received an enquiry from:</p>
<ul>
  <li>Name: ${name}</li>
  <li>Phone: ${phone}</li>
  <li>Email: ${email}</li>
  <li>Model: ${model}</li>
  <li>Outlet: ${outlet}</li>
  <li>State: ${state}</li>
  <li>Channel: ${channel}</li>


</ul>`,
      to: state && state === "Odisha" ? "" : "",
      name,
      phone,
    });
    
    // Create a new Finance document
    const newEnquiry = new TestDrive({
      name,
      phone,
      email,
      model,
      state,
      outlet,
      channel,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await newEnquiry.save();


    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Enquiry details submitted successfully",
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
    const channel = searchParams.get("channel");
    console.log(rangeValue, startDate, endDate, channel);

    let filter: any = { isDeleted: false };

    if (channel) {
      filter.channel = channel;
    }

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
        // filter = {};
        break;
    }

    // Fetch the filtered data from the database
    const enquiries = await TestDrive.find(filter).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(enquiries), { status: 200 });
  } catch (err: any) {
    console.error("Error:", err.message);
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
