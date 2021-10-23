import express from "express";
import path from "path";
import fs from "fs";
import mqtt from "mqtt";
import { client } from "./serverdata.js";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
let bdata = client;

app.use(express.static(path.resolve(__dirname, "script")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/script/script_for_front.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "script", "script_for_front.js"));
});
app.get("/serverdata.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "serverdata.js"));
});
app.listen(PORT, () => {
  console.log("server has been started");
});
