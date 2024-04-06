import { Router } from "express";
import { postProduct } from "../controllers/post.controller";
import { getAllProducts } from "../controllers/get.controllers";
import deleteProduct from "../controllers/delete.controller";
const router = Router();

// -------------- post --------------- //
router.post("/product", postProduct);
// -------------- get ---------------- //
router.get("/product", getAllProducts);
// -------------- delete ------------- //
router.delete("/product/:id", deleteProduct)

export default router;
