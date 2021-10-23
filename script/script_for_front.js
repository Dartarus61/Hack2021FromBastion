import mqtt from "mqtt";
import Ably from "ably";

const broker = "mqtt0.bast-dev.ru";
const port = 1883;
const topic_prefix = "service/weather_logger/#";
const username = "hackathon";
const password = "Autumn2021";

var client = mqtt.connect("mqtt://mqtt0.bast-dev.ru:1883", {
  username: "hackathon",
  password: "Autumn2021",
});
var topic = "service/weather_logger/";
console.log("1");
client.on("connect", () => {
  client.subscribe("service/weather_logger/#", (err) =>
    err ? console.error : null
  );
  client.on("message", (topic, value) => {
    console.log(topic, value.toString());
  });
});

const data = serv;
let formattedJson = JSON.stringify(serv, null, 4);
let fan1 = () => {
  $("#temp-air").text(serv.x);
};

let fan2 = () => {
  $("#temp-ground").text(serv.pol2);
};

let fan3 = () => {
  $("#air-humidity").text(serv.pol3);
};

let fan4 = () => {
  $("#soil-moisture").text(serv.pol4);
};

let fan5 = () => {
  $("#illumination").text(serv.pol5);
};
$("#button-temp-air").bind("click", fan1);
$("#button-temp-ground").bind("click", fan2);
$("#button-air-humidity").bind("click", fan3);
$("#button-soil-moisture").bind("click", fan4);
$("#button-illumination").bind("click", fan5);
