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

// client.on("connect", function () {
//   console.log("client connected");
//   client.subscribe(
//     "service/weather_logger/outdoor_temperature",
//     (err, granted) => {
//       if (err) {
//         console.error(err, "||", granted);
//       }
//       client.on("message", (topic, message) => {
//         console.log(message.toString());
//       });
//       client.end();
//     }
//   );
// });
// client.on("message", function (topic_prefix, message) {
//   // message is Buffer
//   console.log(message.toString());
//   client.end();
// });
// // export default obj = {
//   x: 1,
//   pol2: "xbit",
//   pol3: "mi stradaem",
//   pol4: 10000,
//   pol5: "dfpmh",
// };
