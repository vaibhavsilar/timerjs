timerjs
=======

A simple and very lighweight timer for web based application built in pure javscript.

This library has no dependency on any library.

USAGE:
=======
```html
var config = {
	"hrs":0,"mins":0,"secs":3,
	complete:onComplete,
	update:onUpdate
	};

var t = new Timer(config);
t.init();

function onUpdate(time)
{
        console.log(time.hrs+" "+time.mins+" "+time.secs);
}

function onComplete()
{
        //code to be executed
}
```


