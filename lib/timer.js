/*Timer class*/
function Timer(o){
var mins,secs,hrs,TimerRunning,TimerID;
TimerRunning=false;
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
	this.stopTimer();
    this.run();
	var self = this;
	TimerID = window.setInterval(function(){self.run();},1000);
 }
 this.stopTimer = function()
 {
    if(TimerRunning){
       clearInterval(TimerID);
	}
    TimerRunning=false;
 }
 this.run = function()
 {
    TimerRunning=true;
	if(typeof o.update === 'function'){
		 o.update.apply(o,[{hrs:hrs,mins:mins,secs:secs}]);
	}
	
    if(mins==0 && secs==0 && hrs==0){
     if(typeof o.complete === 'function'){
		 o.complete.call();
	 }
	 this.stopTimer();
	 return;
	}
    if(secs==0)
    {
       mins--;
	   if(mins==-1)
	   {
		   if(hrs!=0)mins= 59;
		   hrs--;
	   }
       secs=60;
    }
	//cue functionality to be added here
	
    secs--;
	
 } 
 this.pad = function(n) //pads the mins/secs with a 0 if its less than 10
 {
    return (n<10)?0+""+n:n;
 }
}
