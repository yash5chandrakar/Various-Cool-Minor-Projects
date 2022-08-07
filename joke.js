function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let setupdata = document.getElementById("setup")
            let deliverydata = document.getElementById("delivery")
            if (data.type === "twopart") {
                setupdata.innerHTML = data.setup
                deliverydata.innerHTML = data.delivery
            }
            else {
                setupdata.innerHTML = data.joke
                deliverydata.innerHTML = ""
            }
        })
}