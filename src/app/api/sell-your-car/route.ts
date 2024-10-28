import { connectDB } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import SellYourCar from "@/models/sellYourCarModel";

import moment from "moment";
import "moment-timezone";
import { NextResponse, NextRequest } from "next/server";

moment.tz.setDefault("Asia/Kolkata");
connectDB();

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const {
      name,
      phone,
      email,
      carModel,
      address,
      state,
      city,
      brandName,
      makeYear,
      fuelType,
      ownerShip,
      carVariant,
      kilometerDriven,
      registerCity,
      transmission,
    } = await req.json();

    // Validate required fields
    if (
      !name ||
      !phone ||
      !email ||
      !carModel ||
      !address ||
      !state ||
      !city ||
      !brandName ||
      !makeYear ||
      !fuelType ||
      !ownerShip ||
      !carVariant ||
      !kilometerDriven ||
      !registerCity ||
      !transmission
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Please fill all the fields" }),
        { status: 400 }
      );
    }

    // Get current date and time
    const date = moment().format("YYYY-MM-DD");
    const time = moment().format("HH:mm:ss");
    const sendEMail = await sendEmail({
      subject: `Truevalue - Sell Your Car ${carModel}  Request from ${name}`,
      text: `<p>Truevalue - Sell Your Car Enquiry Request,</p>
<p>You received an enquiry from:</p>
<ul>
  <li>Name: ${name}</li>
  <li>Phone: ${phone}</li>
  <li>Email: ${email}</li>

  <li>Address: ${address}</li>
  <li>City: ${city}</li>
  <li>Model: ${carModel}</li>
  <li>Brand: ${brandName}</li>
  <li>Year: ${makeYear}</li>
  <li>Fuel: ${fuelType}</li>
  <li>Ownership: ${ownerShip}</li>
  <li>Variant: ${carVariant}</li>
  <li>Kilometer Driven: ${kilometerDriven}</li>
  <li>Register City: ${registerCity}</li>
  <li>Transmission: ${transmission}</li>

  <li>State: ${state}</li>

</ul>`,
      to: state && state === "Odisha" ? "" : "",
      name,
      phone,
    });

    // Create a new Insurancedocument
    const newSellYourCar = new SellYourCar({
      name,
      phone,
      email,
      carModel,
      brandName,
      makeYear,
      fuelType,
      ownerShip,
      carVariant,
      kilometerDriven,
      registerCity,
      transmission,
      city,
      state,
      address,
      date, // Ensure these fields are in the schema
      time,
    });

    // Save the document to the database
    const finalData = await newSellYourCar.save();

    // Return a success response
    return new NextResponse(
      JSON.stringify({
        message: "Sell your car details submitted successfully",
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
    const enquiries = await SellYourCar.find(filter).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(enquiries), { status: 200 });
  } catch (err: any) {
    console.error("Error:", err.message);
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
