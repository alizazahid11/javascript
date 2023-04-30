 var date = new Date();
 console.log(date);
var birthdate = new Date("june 11,2001");
console.log(birthdate);
//calculating time in miliseconds
var msdae=date.getTime();
var msdate=birthdate.getTime();
//calculating diff of this time
var msdiff=msdae-msdate;
console.log("difference: ",msdiff);
//converting miliseconds to days
var ddiff= msdiff/(1000*60*60*24);
 console.log("days: ",ddiff);
//converting miliseconds to year
var year= msdiff/(1000*60*60*24*365);
 console.log("year:" ,year);
 console.log("month: ",(89/100)*12);
 //rounding down years in float to whole numbers
 year=Math.floor(year);
 console.log("differnce in year: ",year);
  //rounding down days in float to whole numbers
  ddiff=Math.floor(ddiff);
  console.log("no of days: ",ddiff);
   //rounding down month in float to whole numbers
  var mdiff=((89/100)*12);
   mdiff=Math.floor(mdiff);
   console.log("differnce in months: ",mdiff);
 //by combining them
 var msdiff = new Date().getTime() - new Date("June 11, 2001").getTime();
 console.log(msdiff);
 var diff = Math.floor(msdiff / (1000 * 60 * 60 * 24*365));
 console.log(diff);
 //specifying the time along with date
 var d = new Date("april 30, 2023 10:15:00");
 console.log(d);
//setting years and months
 date.setFullYear(2025);
 console.log(date);
 date.setMonth(06);
 console.log(date);
 date.setDate(11);
 console.log(date);
 date.setHours(13);
 console.log(date);
 date.getMinutes(05);
 console.log(date);
 date.setSeconds(05);
 console.log(date);
 date.setMilliseconds(867);
 console.log(date);
  










