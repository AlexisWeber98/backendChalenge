import { Router } from "express";
import { postProduct } from "../controllers/post.controller";
import { getAllProducts } from "../controllers/get.controllers";
import putProduct from "../controllers/put.controller";
import deleteProduct from "../controllers/delete.controller";
import RoutesGuide from "./guide";
const router = Router();

// -------------- post --------------- //
router.post("/product", postProduct);
// -------------- get ---------------- //
router.get("/", RoutesGuide);
router.get("/product", getAllProducts);
// -------------- delete ------------- //
router.delete("/product/:id", deleteProduct);
// -------------- put ---------------- //
router.put("/product", putProduct);
export default router;
