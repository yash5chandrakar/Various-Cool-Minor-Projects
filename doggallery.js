let obj = document.getElementById("list")

function addItem() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let another = document.createElement("div")     // main container
            let newElement = document.createElement("img")  // creating an image
            let link = data.message // href goes here
            newElement.src = link   // set source data
            let text = extractBreedName(link)
            let linkDogSite = generateLink(text)  // generate dog info link    
            let linkElement = document.createElement("span")  // text + link
            linkElement.innerHTML = ` <br> ${text}  <button onclick="openSite(this.value)" value="${linkDogSite}">🐶 Info</button> `
            another.appendChild(newElement)
            another.appendChild(linkElement)
            obj.appendChild(another)
            window.scrollBy(0, 400)
        })
}

function generateLink(text) {
    let value = "https://www.google.com/search?q="
    value += text + " dog"
    return value
}

function openSite(value) {
    window.open(value, '_blank')
}

function extractBreedName(link) {
    for (let i = 30; i < link.length; i++) {
        if (link.charAt(i) == '/') {
            return link.substring(30, i).toUpperCase()
        }
    }
}
