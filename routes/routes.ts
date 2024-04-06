import { Router } from "express";
import Hola from "../controllers/get";

const router = Router();
router.get("/", Hola)
export default  router;