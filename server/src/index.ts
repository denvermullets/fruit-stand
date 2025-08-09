import express, { NextFunction } from "express";
import { Request, Response } from "express";
import cors from "cors";
import fruitRouter from "./routes/fruit.routes";
import { publicCorsConfig } from "./util/corsOptions";

const PORT = 3000;
const app = express();

app.use(cors(publicCorsConfig));

// not /fruits ?_?
app.use("/fruit", fruitRouter);

app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({ error: "Are you lost buddy?" });
});

app.listen(PORT, () => console.log(`it's interesting, the ghosts: ${PORT}`));
