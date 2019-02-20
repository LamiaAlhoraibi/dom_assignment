$(document).ready(function(){
  
document.querySelector("#btnn2").addEventListener("click",digitalClock)
document.querySelector("#btn").addEventListener("click",digitalClock24)
   

   
setInterval(digitalClock, 1000)

function digitalClock(u){
    
    
    
    u.preventDefault()
    u.target
    $("#txt2").hide();
    $("#txt").show();
var currentTime = new Date ( );

 var currentHours = currentTime.getHours ( );
 var currentMinutes = currentTime.getMinutes ( );
 var currentSeconds = currentTime.getSeconds ( );

 // Pad the minutes and seconds with leading zeros, if required
 currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
 currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

 // Choose either "AM" or "PM" as appropriate
 var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

 // Convert the hours component to 12-hour format if needed
 currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

 // Convert an hours component of "0" to "12"
 currentHours = ( currentHours == 0 ) ? 12 : currentHours;

 // Compose the string for display
 var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


 // Update the time display
 document.getElementById('txt').innerHTML =currentTimeString
 $(".digitalClock").html(currentTimeString)
 
 }
 //////////////////



document.querySelector("#btn").addEventListener("click",digitalClock24)
 
 setInterval(digitalClock24, 1000)
 
function digitalClock24(e){
    
    
    e.preventDefault()
     e.target
     $("#txt").hide();
    $("#txt2").show();
var currentTime = new Date ( );

 var currentHours = currentTime.getHours ( );
 var currentMinutes = currentTime.getMinutes ( );
 var currentSeconds = currentTime.getSeconds ( );

 // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
 currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;




 // // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 24 : currentHours;

 // Compose the string for display
 var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds ;


 // Update the time display
 document.getElementById('txt2').innerHTML =currentTimeString
 $(".digitalClock2").html(currentTimeString)
// $("#txt").hide();
 }
    
 document.querySelector("#btnn2").addEventListener("click",digitalClock)
 document.querySelector("#btn").addEventListener("click",digitalClock24)
})