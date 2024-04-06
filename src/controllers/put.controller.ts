import type { Request, Response } from "express";
import productModel from "../models/Product";

const putProduct = async (req: Request, res: Response) => {
  try {
    const { id, description, title, price, img } = req.body;
    if (!description || !title || !price || !img || !id)
      return res.status(400).json({ msg: "Missing fields" });

    const editProduct = await productModel.findByIdAndUpdate(
      id,
      { description, title, price, img },
      { new: true }
    ); //retorna o produto atualizado

    return res.status(201).json(editProduct);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default putProduct;
