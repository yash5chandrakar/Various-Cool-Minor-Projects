
function randomselect() {
    let num = Math.floor(Math.random() * 3);
    return num
}

function makeSelection(selectName) {
    let userdisp = document.getElementById("user")
    let compdisp = document.getElementById("computer")

    let scoreuser = document.getElementById("score-user")
    let scorecomp = document.getElementById("score-comp")

    let result = document.getElementById("result-text")

    let computerselect = randomselect() // 0 1 2

    if (computerselect == 0) {
        computerselect = "Rock"
    }
    else if (computerselect == 1) {
        computerselect = "Paper"
    }
    else {
        computerselect = "Scissors"
    }

    if (selectName == "Rock" && computerselect == "Rock") {
        userdisp.innerHTML = "✊"
        compdisp.innerHTML = "✊"
        result.innerHTML = "Draw !"
    }

    if (selectName == "Rock" && computerselect == "Paper") {
        userdisp.innerHTML = "✊"
        compdisp.innerHTML = "🖐"
        scorecomp.innerHTML++
        result.innerHTML = "Paper beats Rock !"
    }

    if (selectName == "Rock" && computerselect == "Scissors") {
        userdisp.innerHTML = "✊"
        compdisp.innerHTML = "✌️"
        scoreuser.innerHTML++
        result.innerHTML = "Rock beats Scissors !"
    }

    if (selectName == "Paper" && computerselect == "Rock") {
        userdisp.innerHTML = "🖐"
        compdisp.innerHTML = "✊"
        scoreuser.innerHTML++
        result.innerHTML = "Paper beats Rock !"
    }

    if (selectName == "Paper" && computerselect == "Paper") {
        userdisp.innerHTML = "🖐"
        compdisp.innerHTML = "🖐"
        result.innerHTML = "Draw !"
    }

    if (selectName == "Paper" && computerselect == "Scissors") {
        userdisp.innerHTML = "🖐"
        compdisp.innerHTML = "✌️"
        scorecomp.innerHTML++
        result.innerHTML = "Scissors beats Paper !"
    }

    if (selectName == "Scissors" && computerselect == "Rock") {
        userdisp.innerHTML = "✌️"
        compdisp.innerHTML = "✊"
        scorecomp.innerHTML++
        result.innerHTML = "Rock beats Scissors !"
    }

    if (selectName == "Scissors" && computerselect == "Paper") {
        userdisp.innerHTML = "✌️"
        compdisp.innerHTML = "🖐"
        scoreuser.innerHTML++
        result.innerHTML = "Scissors beats Paper !"
    }

    if (selectName == "Scissors" && computerselect == "Scissors") {
        userdisp.innerHTML = "✌️"
        compdisp.innerHTML = "✌️"
        result.innerHTML = "Draw !"
    }

    if (scoreuser.innerHTML == '10') {
        alert("You Win !!")
        scorecomp.innerHTML = '0'
        scoreuser.innerHTML = '0'
        userdisp.innerHTML = ""
        compdisp.innerHTML = ""
        result.innerHTML = ""

    }
    if (scorecomp.innerHTML == '10') {
        alert("You Lose !!")
        scorecomp.innerHTML = '0'
        scoreuser.innerHTML = '0'
        userdisp.innerHTML = ""
        compdisp.innerHTML = ""
        result.innerHTML = ""
    }

}


// // console.log('1' + '2')

// // console.log(1 + 2 + '3')

// // console.log(1 + 2 + '3' + 4)



// x = 10;
// console.log(x)
// var x = 0
