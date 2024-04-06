import type { Request, Response } from "express";
import productModel from "../models/Product";

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      return res.status(200).json({ message: "Successfully deleted the product" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default  deleteProduct;

