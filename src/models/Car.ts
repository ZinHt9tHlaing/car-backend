import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
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
});

const Car = mongoose.model("Car", carSchema);
export default Car;
