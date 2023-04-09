//shows the names of days in weeks
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];// variable for current day
console.log(dayNames)//print daynames
console.log(nameOfToday)//print todays day
alert("this is the current day")

var rightNow = new Date();
//to convert date to string
var dateString = rightNow.toString();
var rightNow = new Date();
var theDay = rightNow.getDay();
console.log(rightNow)
console.log(theDay)

var d = new Date();
var currentMonth = d.getMonth();// no.of month
console.log(currentMonth);
var dayOfMonth = d.getDate();
console.log(dayOfMonth);
var currYr = d.getFullYear();
console.log(currYr);
var currentHrs = d.getHours();//gives you a number from 0 through 59
console.log(currentHrs);
var currMins = d.getMinutes();//gives you a number from 0 through 59
console.log(currMins);
var currSecs = d.getSeconds();//gives you a number from 0 through 999
console.log(currSecs);

