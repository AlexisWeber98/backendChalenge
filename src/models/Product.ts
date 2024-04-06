import { UUID } from "mongodb";
import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IProduct extends Document {
  _id: string;
  title: string;
  description: string;
  price: number;
  img: string;
}

const productSchema = new Schema({
  id: {
    type: UUID,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
