import { Router } from "express";

import { postProduct } from "../controllers/post.controller";
import { getAllProducts } from "../controllers/get.controllers";
const router = Router();

// -------------- post --------------- //
router.post("/product", postProduct);
// -------------- get ---------------- //
router.get("/product", getAllProducts)

export default router;
