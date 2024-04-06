import type { Request, Response } from "express";
import productModel from "../models/Product";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { id, title, price, page, order, all } = req.query;
    let query: any = {};

    // ---------------- search by id ---------------//
    if (!id && !title && !price && !page && !order && !all)
      return res.status(400).send("Missing parameters");

    if (all === "true") {
      const all = await productModel.find();
      return res.status(200).json(all);
    }

    if (id) {
      let result = await productModel.findById(String(id));
      if (!result) return res.status(404).json({ message: "No Product Found" });
      return res.status(200).json(result);
    }

    // -------------------- options --------------------- //

    if (title) {
      let regex: RegExp = new RegExp(String(title), "i");
      query.title = regex;
    }

    if (price) query.price = { $lte: price };

    let sort: any = {};
    if (order) {
      const sortOrder = order === "asc" ? 1 : -1;
      sort.price = sortOrder;
    }

    const itemsPerPage = 8;
    const currentPage = parseInt(page as string) || 1;
    const offset = (currentPage - 1) * itemsPerPage;

    const products = await productModel
      .find(query)
      .sort(sort)
      .skip(offset)
      .limit(itemsPerPage);

    const totalProducts = await productModel.countDocuments(query);

    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const response = {
      products,
      totalPages,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export { getAllProducts };
