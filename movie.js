function displayForm() {
    let obj = document.getElementById("formtab")
    if (obj.style.display == 'none') {
        obj.style.display = "block"
    }

    else {
        obj.style.display = "none"
    }
}

function increment(id) {
    let x = document.getElementById(id).innerText
    console.log(id)
    if (x < 10) {
        document.getElementById(id).innerText = parseInt(document.getElementById(id).innerText) + 1
    }
    console.log("increment")
}
function decrement(id) {
    let x = document.getElementById(id).innerText
    if (x > 1) {
        document.getElementById(id).innerText = parseInt(document.getElementById(id).innerText) - 1
    }
    console.log("decrement")
}

function deleteElement(id) {
    document.getElementById(id).remove()
}


function addItem() {
    let titledata = document.getElementById("title").value
    let imagedata = document.getElementById("image").value
    let ratingdata = document.getElementById("rating").value
    if (titledata == "" || imagedata == "") {
        alert("Please fill the details")
    }
    else {
        let mainobj = document.getElementById("tabledata")
        let element = document.createElement("tr")
        let trid = getRandom()
        element.id = trid;
        let title = document.createElement("td")
        let imagetd = document.createElement("td")
        let image = document.createElement("img")
        image.src = imagedata
        imagetd.appendChild(image)
        let rating = document.createElement("td")
        let update = document.createElement("td")


        // workings
        title.innerHTML = titledata
        let counterid = parseInt(getRandom())
        rating.innerHTML = `<button onclick="increment(this.value)" value="${counterid}">👍</button>
                        <span id="${counterid}">${ratingdata}</span><button onclick="decrement(this.value)" value="${counterid}">👎</button>`
        update.innerHTML = `<button onclick="deleteElement(this.value)" value="${trid}">🗑️</button>`
        element.appendChild(imagetd)
        element.appendChild(title)
        element.appendChild(rating)
        element.appendChild(update)
        mainobj.appendChild(element)
        document.getElementById("formtab").style.display = "none"
        document.getElementById("title").value = ""
        document.getElementById("image").value = ""
        document.getElementById("rating").value = ""
    }
}

function getRandom() {
    let x = Math.random()
    x = Math.floor(x * 10000)
    return x
}


function showValue() {
    document.getElementById("rating").title = document.getElementById("rating").value
}


