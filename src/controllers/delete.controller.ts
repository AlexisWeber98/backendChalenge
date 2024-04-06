import type { Request, Response } from "express";
import productModel from "../models/Product";

const deleteProduct = async (req:Request, res:Response) => {
try {
    const id = req.params.id;
    // const deleteProduct = await productModel.delete({_id : id});
    //  if(!deleteProduct){
    //      return res.status(401).json('Error while deleting the product');
    //  }else{
        return res.status(200).json("Successfully deleted the product");
} catch (error) {
    

}}