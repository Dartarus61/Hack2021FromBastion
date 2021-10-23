let fan1 = () => {
  $("#5").hide();
  $("#4").hide();
  $("#3").hide();
  $("#2").hide();
  $("#1").show();
};

let fan2 = () => {
  $("#5").hide();
  $("#4").hide();
  $("#3").hide();
  $("#1").hide();
  $("#2").show();
};

let fan3 = () => {
  $("#5").hide();
  $("#4").hide();
  $("#1").hide();
  $("#2").hide();
  $("#3").show();
};

let fan4 = () => {
  $("#5").hide();
  $("#1").hide();
  $("#3").hide();
  $("#2").hide();
  $("#4").show();
};

let fan5 = () => {
  $("#1").hide();
  $("#4").hide();
  $("#3").hide();
  $("#2").hide();
  $("#5").show();
};
$("#button-temp-air").bind("click", fan1);
$("#button-temp-ground").bind("click", fan2);
$("#button-air-humidity").bind("click", fan3);
$("#button-soil-moisture").bind("click", fan4);
$("#button-illumination").bind("click", fan5);
$("#button-temp-air-img").bind("click", fan1);
$("#button-temp-ground-img").bind("click", fan2);
$("#button-air-humidity-img").bind("click", fan3);
$("#button-soil-moisture-img").bind("click", fan4);
$("#button-illumination-img").bind("click", fan5);
