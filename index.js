import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cruds from "./models/router/crudrouter/index.js";

const app = express();
dotenv.config();
app.use(bodyparser.json());
const PORT = process.env.PORT;
const HARI = process.env.HARI;
app.get("/", (request, response) => {
  const name = request.query.name;
  response.send("CONNECTED");
});

app.use("/hii", cruds);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Welcome to MongoDB");
  app.listen(PORT, () => {
    console.log("Work in the PORT " + PORT);
    console.log("MongoDB is " + HARI);
  });
});

console.log("Hello World");
