import mongoose, { Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IOnRoadPrice {
  name: string;
  phone: string;
  email: string;
  model: string;
  outlet: string;
  state: string;
  leadFrom: string;
  variant: string;
  channel: string;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const onRoadPriceSchema: Schema = new Schema<IOnRoadPrice>(
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
    variant: {
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
      default: "On Road Price",
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
const OnRoadPrice =
  mongoose.models.OnRoadPrice ||
  mongoose.model("OnRoadPrice", onRoadPriceSchema);

export default OnRoadPrice;
