
function countDown() {

  //print the value
  console.log(value);

  //decrement value by 1
  value = value - 1;

  //if we've reached zero...
  if(value === 0) {
    //print a special message
    console.log("Happy New Year!");
    //stop the count down by cancelling the interval
    clearInterval(countDownId);
  }
}


//initialize global variable to 10
value = 10;

//start an interval timer to execute every second,
//store its id in a variable:
countDownId = setInterval(countDown, 1000);
