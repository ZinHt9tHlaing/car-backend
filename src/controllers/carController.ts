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

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  // (1 - 1) * 10 = 0    ==> no skip
  // (2 - 1) * 10 = 10   ==> skip previous 10 at page 1, starts from 11
  // (3 - 1) * 10 = 20   ==> skip previous 20 at page 2, starts from 21

  results = results.skip(skip).limit(limit); // pagination

  const cars = await results;

  const totalCars = await Car.countDocuments(query);

  if (cars.length === 0) {
    return res.status(404).json({ message: "No cars found" });
  }

  const totalPages = Math.ceil(totalCars / limit);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  res
    .status(200)
    .json({
      message: "Get all cars",
      total: totalCars,
      page,
      limit,
      totalPages,
      hasPreviousPage,
      hasNextPage,
      cars,
    });
};
