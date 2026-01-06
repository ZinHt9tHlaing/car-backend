import { Request, Response } from "express";
import Car from "../models/Car";

export const getAllCars = async (req: Request, res: Response) => {
  const { name, featured, sort, select } = req.query;

  let query: any = {};

  if (name) {
    query.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    query.featured = featured === "true" ? true : false;
  }

  let results = Car.find(query);

  if (typeof sort === "string") {
    results = results.sort(sort.split(",").join(" ")); // sort("name price")
  }

  if (typeof select === "string") {
    results = results.select(select.split(",").join(" ")); // select("name price")
  }

  const cars = await results;

  if (cars.length === 0) {
    return res.status(404).json({ message: "No cars found" });
  }

  res.status(200).json({ message: "Get all cars", total: cars.length, cars });
};
