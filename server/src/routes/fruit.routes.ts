import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import fruitController from "../controllers/fruit.controller";
import { publicCorsConfig } from "../util/corsOptions";

const fruitRouter = express.Router();

fruitRouter.get(
  "/",
  cors(publicCorsConfig),
  async (req: Request, res: Response, next: NextFunction) =>
    await fruitController.getFruit(req, res, next)
);

fruitRouter.get(
  "/colors",
  cors(publicCorsConfig),
  async (req: Request, res: Response, next: NextFunction) =>
    await fruitController.getColors(req, res, next)
);

export default fruitRouter;
