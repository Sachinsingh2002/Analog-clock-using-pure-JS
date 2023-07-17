setInterval(() => { // it is use as a loop to do a task again and again
    d = new Date();
    htime = d.getHours(); // method for geting the current hour
    mtime = d.getMinutes(); // method for grting the current minute
    stime = d.getSeconds(); // method for geting the current second
    hrotation = 30*htime + mtime/2; // calculation for hour rotation
    mrotation = 6*mtime; // calculation for minute rotation
    srotation = 6*stime; // calculation for second rotation

    hour.style.transform = `rotate(${hrotation}deg)`; // importing the css file 
    minute.style.transform = `rotate(${mrotation}deg)`; // importing the css file
    second.style.transform = `rotate(${srotation}deg)`; // importing the css file 
    
}, 1000); // interval in milisecond (1000 = 1 second).