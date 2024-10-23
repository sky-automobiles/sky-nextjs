import mongoose, { Document, Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface ISellYourCar {
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  brandName: string;
  carModel: string;
  makeYear: string;
  fuelType: string;
  ownerShip: string;
  carVariant: string;
  kilometerDriven: string;
  registerCity: string;
  transmission: string;
  leadFrom: String;
  state: string;
  isDeleted?: boolean;
  deletedAt?: Date;
  time: string;
  date: string;
}

// Define the schema with type annotations
const sellYourCarSchema: Schema = new Schema<ISellYourCar>(
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
    city: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
    carModel: {
      type: String,
      required: true,
      trim: true,
    },
    makeYear: {
      type: String,
      required: true,
      trim: true,
    },
    fuelType: {
      type: String,
      required: true,
      trim: true,
    },
    ownerShip: {
      type: String,
      required: true,
      trim: true,
    },
    carVariant: {
      type: String,
      required: true,
      trim: true,
    },
    kilometerDriven: {
      type: String,
      required: true,
      trim: true,
    },
    registerCity: {
      type: String,
      required: true,
      trim: true,
    },
    transmission: {
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
      default: "Sell Your Car - TV",
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
const SellYourCar: Model<ISellYourCar> =
  mongoose.models.SellYourCar ||
  mongoose.model<ISellYourCar>("SellYourCar", sellYourCarSchema);

export default SellYourCar;
