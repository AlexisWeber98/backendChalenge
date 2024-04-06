import type { Request, Response } from "express";
import productModel from "../models/Product";

// post
const postProduct = async (req: Request, res: Response) => {
  try {
    const { title, description, price, img } = req.body;
    const newProduct = await productModel.create({
      title,
      description,
      price,
      img
    });
    res.status(200).json(newProduct);
  } catch (error) {

  }
};

export { postProduct };
