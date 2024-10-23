import mongoose, { Document, Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IService {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  address: string;
  serviceType: string;
  isPickup: string;
  serviceDate: string;
  state: string;
  leadFrom: string;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;

}

// Define the schema with type annotations
const serviceSchema: Schema = new Schema<IService>(
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
    address: {
      type: String,
      required: true,
      trim: true,
    },

    serviceType: {
      type: String,
      required: true,
      trim: true,
    },

    isPickup: {
      type: String,
      required: true,
      trim: true,
    },

    serviceDate: {
      type: String,
      required: true,
      trim: true,
    },
    leadFrom: {
      type: String,
      default: "Service",
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
const Service: Model<IService> =
  mongoose.models.BookService ||
  mongoose.model<IService>("BookService", serviceSchema);

export default Service;
