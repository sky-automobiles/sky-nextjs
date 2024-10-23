import mongoose, { Document, Schema, Model } from "mongoose";

interface IBuyACar {
  name: string;
  phone: string;
  email: string;
  outlet: string;
  state: string;
  model: string;
  leadFrom: string;
  carNumber: string;
  date: string;
  time: string;
  isDeleted?: boolean;
  deletedAt?: Date;
}

const buyACarSchema: Schema = new Schema<IBuyACar>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    outlet: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    leadFrom: { type: String, default: "Buy A Car - TV", trim: true },
    carNumber: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

const BuyACar: Model<IBuyACar> =
  mongoose.models.BuyACar || mongoose.model<IBuyACar>("BuyACar", buyACarSchema);

export default BuyACar;
