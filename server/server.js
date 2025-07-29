import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

// App Config
const app = express();

// DB Config
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// routes

// API endpoints

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
