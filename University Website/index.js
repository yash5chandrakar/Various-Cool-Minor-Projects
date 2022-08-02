var slide = document.getElementById("slider")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")



function a() {
    slide.style.transform = "translateX(0px)"
}
function b() {
    slide.style.transform = "translateX(-100%)"
}
function c() {
    slide.style.transform = "translateX(-200%)"
}
function d() {
    slide.style.transform = "translateX(-300%)"
}
let x = 0;
function sildeshow() {
    x++;
    if (x % 4 == 0) {
        a()
    }
    if (x % 4 == 1) {
        b()
    }
    if (x % 4 == 2) {
        c()
    }
    if (x % 4 == 3) {
        d()
    }
}


setInterval(sildeshow, 6000)





