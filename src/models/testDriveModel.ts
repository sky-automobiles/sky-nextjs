import mongoose, { Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface ITestDrive {
  name: string;
  phone: string;
  email: string;
  model: string;
  outlet: string;
  state: string;
  leadFrom: string;
 
  channel: string;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const TestDriveSchema: Schema = new Schema<ITestDrive>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    outlet: {
      type: String,
      required: true,
      trim: true,
    },
   
    channel: {
      type: String,
      required: true,
      trim: true,
    },
    leadFrom: {
      type: String,
      default: "Test Drive",
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model with the interface
const TestDrive =
  mongoose.models.TestDrive ||
  mongoose.model("TestDrive", TestDriveSchema);

export default TestDrive;
