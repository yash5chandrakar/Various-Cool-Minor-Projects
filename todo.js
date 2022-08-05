let btn = document.getElementById("input");
btn.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        create()
    }
});
function create() {
    let x = document.getElementById("input").value
    x = x.trim()
    if (x == "") {
        document.getElementById("error-holder").innerHTML = "Please Enter Some Text"
        document.getElementById("input").value = ""
        return
    }
    else {
        let id = randomNum()
        let obj = document.createElement("li")
        obj.id = id
        obj.innerHTML = `<input type="checkbox" class="largeCheckbox" onclick="chekd(this.value,this.checked)" value = "${id}">  ` + x + ` <button onclick = "removeElement(this.value)" value="${id}" >&#10006;</button>  <button onclick = "editElement(this.value)" value="${id}" >✏️</button>    `
        document.getElementById("box").prepend(obj)
        document.getElementById("error-holder").innerHTML = ""
        document.getElementById("input").value = ""

        obj.animate([
            { opacity: '0' }, { opacity: '1' }
        ], 1000
        )
    }
}

function chekd(id, status) {
    let element = document.getElementById(id)
    if (status == true) {
        let parent = element.parentNode
        parent.removeChild(element)
        parent.appendChild(element)
    }
    else {
        let parent = element.parentNode
        parent.removeChild(element)
        parent.prepend(element)
    }
}

function randomNum() {
    return (Math.floor((Math.random() * 100000)))
}

function editElement(id) {
    let data = prompt("Please enter task") // data in
    data = data.trim()
    if (data !== "") {
        let obj = document.getElementById(id)
        obj.innerHTML = `<input type="checkbox" class="largeCheckbox" onclick="chekd(this.value,this.checked)" value = "${id}"> ` + data + ` <button onclick = "removeElement(this.value)" value="${id}" >&#10006;</button>  <button onclick = "editElement(this.value)" value="${id}" >✏️</button>    `
    }
}

function removeElement(id) {
    let element = document.getElementById(id)
    element.parentNode.removeChild(element)
}


function clearMarked() {
    let array = document.getElementsByClassName("largeCheckbox")
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked == true) {
            let id = array[i].value
            let element = document.getElementById(id)
            element.parentNode.removeChild(element)
            i--
        }
    }
}
