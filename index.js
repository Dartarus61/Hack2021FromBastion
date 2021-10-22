import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log("server has been started");
});
