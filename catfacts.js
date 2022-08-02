
let x = document.getElementById("catfacts")
let abc = () => {
    fetch("https://catfact.ninja/fact")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            x.innerHTML = data.fact
        })
}


let obj = document.getElementById("text")

let num = 1;
function animate() {
    if (num % 2 == 0) {
        obj.animate([
            { opacity: 1 }, {
                opacity: 0
            }

        ], 2000)
    }
    else {
        obj.animate([
            { opacity: 0 }, {
                opacity: 1
            }

        ], 2000)
    }





    // num++
    // if (num % 5 == 4 || num % 5 == 0) {
    //     obj.style.opacity = 1
    // }
    // else {
    //     obj.style.opacity = 0
    // }
}

setInterval(animate, 3000)




