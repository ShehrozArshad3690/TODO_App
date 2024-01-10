import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/todoRoute";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.PORT;
const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log(`http://localhost:${port}`));
