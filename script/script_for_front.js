import serv from "../serverdata.js";

const data = serv;
let formattedJson = JSON.stringify(serv, null, 4);
let fan1 = () => {
  //document.body.innerHTML += `<pre>${formattedJson}</pre>`;
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
