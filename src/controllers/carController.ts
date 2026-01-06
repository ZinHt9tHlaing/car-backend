import { Request, Response } from "express";
import Car from "../models/Car";

export const getAllCars = async (req: Request, res: Response) => {
  const { name, featured } = req.query;

  let query: any = {};

  if (name) {
    query.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    query.featured = featured === "true" ? true : false;
  }

  console.log("query", query);

  const cars = await Car.find(query);

  if (cars.length === 0) {
    return res.status(404).json({ message: "No cars found" });
  }

  res.status(200).json({ message: "Get all cars", total: cars.length, cars });
};
