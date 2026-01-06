import { Request, Response } from "express";

export const getAllCars = async (req:Request, res:Response) => {
    res.status(200).json("Get all cars");
}