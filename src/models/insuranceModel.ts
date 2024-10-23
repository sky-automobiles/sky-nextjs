import mongoose, { Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IInsurance {
  name: string;
  phone: string;
  email: string;
  model: string;
  address: string;
  city: string;
  state: string;
  leadFrom: string;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const insuranceSchema: Schema = new Schema<IInsurance>(
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
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    leadFrom: {
      type: String,
      default: "Insurance",
    },
    address: {
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
const Insurance: Model<IInsurance> =
  mongoose.models.InsuranceCol ||
  mongoose.model<IInsurance>("InsuranceCol", insuranceSchema);

export default Insurance;
