import type { Request, Response } from "express";

const Hola = (req: Request, res: Response)=> {
res.status(200).json("holis")
}

export default Hola;