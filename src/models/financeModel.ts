import mongoose, {  Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IFinance {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  state: string;
  loanAmount: number;
  loanTenure: number;
  leadFrom: string;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const financeSchema: Schema = new Schema<IFinance>(
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
    loanAmount: {
      type: Number,
      required: true,
    },
    loanTenure: {
      type: Number,
      required: true,
    },
    leadFrom: {
      type: String,
      default: "finance",
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
const Finance: Model<IFinance> =
  mongoose.models.FinanceCol || mongoose.model<IFinance>("FinanceCol", financeSchema);

export default Finance;
