import mongoose, { Document } from "mongoose";
const { Schema, model } = mongoose;

interface ICounter extends Document {
  _id: string;
  seq: number;
}

interface IProduct extends Document {
  _id: number;
  title: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

const counterSchema = new Schema<ICounter>({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});
const counterModel = model<ICounter>("counter", counterSchema);

const productSchema = new Schema<IProduct>({
  _id: { type: Number },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category: { type: String },
});

productSchema.pre("save", async function (next) {
  let doc = this as IProduct;
  const counter = (await counterModel.findByIdAndUpdate(
    { _id: "productId" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )) as ICounter;
  if (counter) {
    doc._id = counter.seq;
  } else {
    next(new Error("Unable to find or create the counter document."));
  }
  next();
});

const productModel = model<IProduct>("Product", productSchema);

export default productModel;
