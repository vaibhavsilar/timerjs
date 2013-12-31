function Timer(o,callback,scope){
var mins,secs,hrs,TimerRunning,TimerID;
TimerRunning=false;
 var display,callback;
 this.init=function(d){ 
	if(o.mins==undefined){
		hrs = 1;
		mins=30;
		secs=0;
	}else
	{
		hrs = o.hrs;
		mins= o.mins;
		secs= o.secs;
	}
    display = d;
	this.stopTimer();
    this.startTimer();
	var self = this;
	TimerID = window.setInterval(function(){self.startTimer();},1000);
 }
 this.stopTimer = function()
 {
    if(TimerRunning){
       clearInterval(TimerID);
	}
    TimerRunning=false;
 }
 this.startTimer = function()
 {
    TimerRunning=true;
    display.innerHTML = this.pad(hrs)+":"+this.pad(mins)+":"+this.pad(secs);
    if(mins==0 && secs==0 && hrs==0){
     if(typeof callback === 'function')callback.call(scope);
	 this.stopTimer();
	}
    if(secs==0)
    {
       mins--;
	   if(mins==-1)
	   {
		   if(hrs!=0)mins	 = 59;
		   hrs--;
	   }
       secs=60;
    }
    secs--;
 } 
 this.pad = function(n) //pads the mins/secs with a 0 if its less than 10
 {
    return (n<10)?0+""+n:n;
 }
}