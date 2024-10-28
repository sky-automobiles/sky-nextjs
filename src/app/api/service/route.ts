import { connectDB } from "@/dbConfig/dbConfig";
import Service from "@/models/serviceModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";
import Mailgen from "mailgen";
import { sendEmail } from "@/helpers/mailer";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const {
      name,
      phone,
      email,
      model,
      address,
      state,
      city,
      serviceType,
      isPickup,
      serviceDate,
    } = await req.json();

    // Validate required fields
    if (
      !name ||
      !phone ||
      !email ||
      !model ||
      !address ||
      !state ||
      !city ||
      !serviceType ||
      !isPickup ||
      !serviceDate
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("YYYY-MM-DD");
    const time = moment().format("HH:mm:ss");

    // Create a new Servicedocument
    const newService = new Service({
      name,
      phone,
      email,
      model,
      city,
      state,
      address,
      serviceType,
      isPickup,
      serviceDate,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    await newService.save();

    const sendEMail = await sendEmail({

      subject: `New Service Request from ${name}`,
      text: `<p>Service Request from ,</p>
<p>You received an enquiry from:</p>
<ul>
  <li>Name: ${name}</li>
  <li>Phone: ${phone}</li>
  <li>Email: ${email}</li>
  <li>Model: ${model}</li>
  <li>City: ${city}</li>
  <li>State: ${state}</li>
  <li>Address: ${address}</li>
  <li>Service Type: ${serviceType}</li>
  <li>Is Pickup: ${isPickup}</li>
  <li>Service Date: ${serviceDate}</li>

</ul>`,
      to:
        state && state === "Odisha"
          ? ""
          : "skycuttack@gmail.com",
      name,
      phone,
    });

    
    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Service details submitted successfully",
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
    const enquiries = await Service.find(filter).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(enquiries), { status: 200 });
  } catch (err: any) {
    console.error("Error:", err.message);
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
