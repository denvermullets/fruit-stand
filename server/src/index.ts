import express, { NextFunction } from "express";
import { Request, Response } from "express";
import fruitRouter from "./routes/fruit.routes";
const PORT = 3000;
const app = express();

// not /fruits ?_?
app.use("/", fruitRouter);

app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({ error: "Are you lost buddy?" });
});

app.listen(PORT, () => console.log(`it's interesting, the ghosts: ${PORT}`));
