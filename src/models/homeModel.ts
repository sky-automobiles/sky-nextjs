import mongoose, { Schema, Model } from "mongoose";

// Define a TypeScript interface that extends mongoose.Document
interface IHome {
  name: string;
  phone: string;
  email: string;
  lookingFor?: string;

  state: string;
  leadFrom: string;
  time: string;
  date: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

// Define the schema with type annotations
const homeSchema: Schema = new Schema<IHome>(
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

      trim: true,
    },
    lookingFor: {
      type: String,

      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
      default: "Chhattisgarh",
    },
    leadFrom: {
      type: String,
      default: "Home",
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


const Home: Model<IHome> =
  mongoose.models.HomeEnq || mongoose.model<IHome>("HomeEnq", homeSchema);

export default Home;