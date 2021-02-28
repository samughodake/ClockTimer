 var hour = Number(prompt("Enter hour"));
 var mins =Number(prompt("Enter minutes"));
 var secs = Number(prompt("Enter seconds"));
 secs = secs <10 ? "0" +secs : secs;
 mins = mins <10 ? "0" +mins : mins;
 hour = hour <10 ? "0" +hour : hour;

 document.querySelector('#timer').textContent=hour+" : "+ mins + " : "+secs
 var timer;
var time = (mins*60)+secs+(hour*3600) //total time in seconds
function start(){
    //will start the timer
    if(!timer){
        timer =  setInterval(run,1000);
    }
}
function run(){
    var minutes = Math.floor(time/60);
    if(minutes>=60){
        minutes=minutes-60;
    }
    var hours = Math.floor(time/3600);
    var seconds = Math.floor(time%60);
    seconds = seconds <10 ? "0" +seconds : seconds;
    minutes = minutes <10 ? "0" +minutes : minutes;
    hours = hours <10 ? "0" +hours : hours;
    document.querySelector('#timer').textContent=hours+" : "+ minutes + " : "+seconds;
    time--;
}

function stop(){
    //pause the timer
    clearInterval(timer);
    timer=false;
}
function reset(){
    clearInterval(timer);
    timer=false;
    minutes=hours=seconds=00;
    seconds = seconds <10 ? "0" +seconds : seconds;
    minutes = minutes <10 ? "0" +minutes : minutes;
    hours = hours <10 ? "0" +hours : hours;
    document.querySelector('#timer').textContent=hours+" : "+ minutes + " : "+seconds ;
}