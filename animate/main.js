
function animate() {

  //reset the colors/text:
  $("#mainHeader").text("Cold!");
  $("#main").css("background-color", "rgb(0,0,255)");

}

function animate2() {

  //reset the colors/text:
  $("#mainHeader2").text("Magenta!");
  $("#main2").css("background-color", "rgb(255,0,255)");

}

/**
 * Changes the color of the #main div the amount
 * of units (0 to 255) from blue to red.
 */
function increment(amount) {
  if(amount === undefined) {
    amount = 1;
  }
  var color = $("#main").css("background-color");
  var rgb = color.match(/\d+/g);
  var red = parseInt(rgb[0]) + amount;
  var green = 0;
  var blue = parseInt(rgb[2]) - amount;

  if(red > 255) {
    red = 255;
  }
  if(blue < 0) {
    blue = 0;
  }

  var newColor = "rgb(" + red + ","+green+","+blue+")";
  console.log(color + " => " + newColor);
  $("#main").css("background-color", newColor);
  if(red === 255 || blue === 0) {
    $("#mainHeader").text("Hot!");
    console.log("stopping animation");
  }
}

function increment2(amount) {
  if(amount === undefined) {
    amount = 1;
  }
  var color = $("#main2").css("background-color");
  var rgb = color.match(/\d+/g);
  var red = parseInt(rgb[0]) - amount;
  var green = parseInt(rgb[1]) + amount;
  var blue = parseInt(rgb[2]) - amount;

  if(green > 255) {
    green = 255;
  }
  if(blue < 0) {
    blue = 0;
  }

  var newColor = "rgb(" + red + ","+green+","+blue+")";
  console.log(color + " => " + newColor);
  $("#main2").css("background-color", newColor);
  if(green === 255 || blue === 0) {
    $("#mainHeader2").text("Green!");
    console.log("stopping animation");
  }
}

