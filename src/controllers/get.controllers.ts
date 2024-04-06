import type { Request, Response } from "express";
import productModel from "../models/Product";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const getProduct = await productModel.find();
    res.status(200).json(getProduct);
  } catch (error) {}
};

export { getAllProducts };
