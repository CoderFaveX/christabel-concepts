import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
dotenv.config();

const PORT: any = process.env.PORT || 3500;

app.use(cors());
app.use(json());

app.get("/", (req: express.Request, res: express.Response) => {
  const requestType = req.query;
  res.status(200).send({ msg: `Requesting ${requestType}` });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res); // Let Express handle requests
};
