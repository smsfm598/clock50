// function for time
function twelve_clock() {

    //declaring variables 
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let count = 0
    ampm = 'am';

    //changing am to pm, keeping clock at 12 hours
    if (hour > 12){
        hour = hour - 12;
        count++;

        //determining whether it is am or pm
        if (count % 2 === '0') {
            ampm = 'am';
        }
        else if (count % 2 ==='1') {
            ampm = 'pm';
        }
    }
        // making the program maintainable, ensuring count doesn't get too big
    if (count === '6') {
            count = 0
    }
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
         
    let time = hour + ":" + min + ":" + sec + " " + ampm;
     
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);

    }
twelve_clock();

