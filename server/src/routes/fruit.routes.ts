import express, { NextFunction, Request, Response } from "express";
import fruitController from "../controllers/fruit.controller";

const fruitRouter = express.Router();

fruitRouter.get(
  "/fruit",
  async (req: Request, res: Response, next: NextFunction) =>
    await fruitController.getFruit(req, res, next)
);

export default fruitRouter;
