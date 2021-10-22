import express from "express";
import path from "path";
import fs from "fs";
import mqtt from "mqtt";

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
// const options = {
//    broker = 'mqtt0.bast-dev.ru',
//     port = 1883,
//     topic_prefix = "service/#weather_logger",
//     username = 'hackathon',
//     password = 'Autumn2021',
// }
//const client = mqtt.connect('mqtt://mqtt0.bast-dev.ru')

export const obj = {
  x: 1,
  pol2: "xbit",
  pol3: "mi stradaem",
  pol4: 10000,
  pol5: "dfpmh",
};

app.use(express.static(path.resolve(__dirname, "script")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/script/script_for_front.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "script", "script_for_front.js"));
});
app.listen(PORT, () => {
  console.log("server has been started");
});
