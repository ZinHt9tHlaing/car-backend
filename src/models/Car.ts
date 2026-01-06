import mongoose from "mongoose";

export interface ICar extends Document {
  name: string;
  price: number;
  featured: boolean;
  rating: number;
  company: "tesla" | "bmw" | "toyota" | "audi";
}

const carSchema = new mongoose.Schema<ICar>(
  {
    name: String,
    price: Number,
    featured: Boolean,
    rating: Number,
    company: {
      type: String,
      enum: {
        values: ["tesla", "bmw", "toyota", "audi"],
        message: "{VALUE} is not supported",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model<ICar>("Car", carSchema);
export default Car;
