
function hourHandAngle(h,m){
var hourAngle = (h*60*0.5 + m*0.5);
return hourAngle;
}

function minuteHandAngle(m){
var minuteAngle = (m*6);
return  minuteAngle;
}

function angleBetweenHands(time){
  var arr = time.split(":"); //split into the two numbers
  var min = parseInt(arr[1]); //convert mins to integer
  var minDeg = (min*6)%360; //degrees the minute hand is round the clock
  var hrs = parseInt(arr[0]); //convert hrs to int
  var hrInMinDeg = ((min+(hrs*60))*0.5)%360; //degrees the hr hand is round the clock
  var diff = hrInMinDeg-minDeg; //diff hrs min
  var absDiff = 0;

  if(diff>180){ //taking the smaller one
    absDiff = 360-Math.abs(diff);
  } else{
    absDiff = Math.abs(diff);
  }
  return absDiff;
  }

//but this doesnt work for finding the smallest positive angle - the third and last tests so:

//useful tools:
//use mathAbs or math.min

// var hourHandAngle = function(hour,minutes){
//   return (hour+(minutes/60))*30;
// };

// var minuteHandAngle = function(minutes){
//   return (minutes/60)*360;
// };

// var angleBetweenHands = function(time){

//   var timeArray = time.split(":");

//   timeArray = timeArray.map(function(element){
//     return parseInt(element);
//   });

//   var hourAngle = hourHandAngle(timeArray[0],timeArray[1]);

//   var minuteAngle = minuteHandAngle(timeArray[1]);

//   var finalAngle = hourAngle-minuteAngle;

//   if(finalAngle<0)
//     finalAngle = (-1)*finalAngle;

//   if(finalAngle>180)
//     finalAngle = 360 - finalAngle;

//   return finalAngle;
// };











