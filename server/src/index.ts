import express, { NextFunction } from "express";
import { Request, Response } from "express";
const PORT = 3000;
const app = express();

app.get("/api/v1", (req: Request, res: Response) => {
  const response = { hi: "this works" };
  res.send(response);
});

// not fruits ?_?
app.get("/fruit", (req: Request, res: Response) => {
  const response = { hi: "this works" };
  res.send(response);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Are you lost buddy?" });
});

app.listen(PORT, () => console.log(`it's interesting, the ghosts: ${PORT}`));
