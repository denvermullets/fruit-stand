import { NextFunction, Request, Response } from "express";
import fruitModel from "../models/fruit.model";

const fruitController = {
  getFruit: async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const { in_season, color, name } = req.query;

      // i've been burned by this in the past so forcing the type to be correct here
      const inSeason = in_season === "true" ? true : in_season === "false" ? false : undefined;

      const fruits = await fruitModel.findFruits({
        ...(typeof inSeason === "boolean" && { inSeason }),
        ...(typeof color === "string" && { color }),
        ...(typeof name === "string" && { name }),
      });

      res.status(200).json({ value: fruits });
    } catch (error) {
      // normally in a real express api i'd push next but didn't want to go down the middleware path
      // next(error);
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  },
  getColors: async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const fruitColors = await fruitModel.findUniqueColors();

      res.status(200).json({ value: fruitColors });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  },
};

export default fruitController;
