var time = 6800;

var hours = Math.floor( time / 3600 );  
var minutes = Math.floor( (time % 3600) / 60 );
var seconds = time % 60;
 
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
 
var result = hours + ":" + minutes + ":" + seconds;  

console.log("h:mm:ss ",hours+":"+minutes+":"+seconds);