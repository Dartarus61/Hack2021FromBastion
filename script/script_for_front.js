import serv from "./serverdata.js";

let jsonData = { foo: "bar", id: 42 };
let fan1 = () => {
  let formattedJson = JSON.stringify(jsonData, null, 4);
  //document.body.innerHTML += `<pre>${formattedJson}</pre>`;
  $("#temp-air").text(jsonData.foo);
};

let fan2 = () => {};

let fan3 = () => {};

let fan4 = () => {};

let fan5 = () => {};
$("#button-temp-air").bind("click", fan1);
$("#button-temp-ground").bind("click", fan2);
$("#button-air-humidity").bind("click", fan3);
$("#button-soil-moisture").bind("click", fan4);
$("#button-illumination").bind("click", fan5);
