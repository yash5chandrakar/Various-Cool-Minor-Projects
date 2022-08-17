let msecs = document.getElementById("msecs")
let secs = document.getElementById("secs")
let mins = document.getElementById("mins")
let playbtn = document.getElementById("playBtn")
let pausebtn = document.getElementById("pauseBtn")

let x;
let current;
let difference = 0;

function pauseStopwatch() {
    clearInterval(x)
    showPlay()
}

function startStopwatch() {
    current = new Date() - new Date(difference);
    x = setInterval(() => {
        let newDate = new Date();
        difference = new Date(newDate - current);
        let milli = (Math.floor(difference.getMilliseconds() / 10)).toString()
        if (milli.length == 1) {
            milli = '0' + milli
        }
        msecs.innerHTML = milli

        let seconds = (difference.getSeconds()).toString()
        if (seconds.length == 1) {
            seconds = '0' + seconds
        }

        secs.innerText = seconds

        let minutes = (Math.floor((difference / 1000) / 60)).toString()
        if (minutes.length == 1) {
            minutes = '0' + minutes
        }
        mins.innerHTML = minutes
    }, 10)
    showPause()
}

function showPlay() {
    pausebtn.style.display = "none"
    playbtn.style.display = "inline"
}

function showPause() {
    pausebtn.style.display = "inline"
    playbtn.style.display = "none"
}

function reset() {
    clearInterval(x)
    pausebtn.style.display = "none"
    playbtn.style.display = "inline"
    msecs.innerHTML = "00"
    secs.innerHTML = "00"
    mins.innerHTML = "00"
    difference = 0
}