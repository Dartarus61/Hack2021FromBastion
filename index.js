import express from "express";
import path from "path";
import fs from "fs";
import mqtt from 'mqtt'


const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const options = {
   broker = 'mqtt0.bast-dev.ru',
port = 1883,
topic_prefix = "service/#weather_logger",
username = 'hackathon',
password = 'Autumn2021',
}
const client = mqtt.connect('mqtt://mqtt0.bast-dev.ru')

app.listen(PORT, () => {
  console.log("server has been started");
});
