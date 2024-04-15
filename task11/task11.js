let json = {}
let api_key = "5d0dfcd2ad48cc25dd841d1b352525b5"

function fetchCity() {
    let city = document.getElementById("city").selectedOptions[0].value;
    let table = document.getElementById("results")
    if (city !== "0") {
        table.hidden = false
        fetch("http://api.openweathermap.org/data/2.5/weather?q=$" + city + "&APPID=$" + api_key)
            .then(response => response.json())
            .then(data => {
                json = data
                drawTable()
            })
    } else {
        table.hidden = true
    }
}

function drawTable() {
    let temp = document.getElementById("temp")
    let hum = document.getElementById("hum")
    let wind = document.getElementById("wind")

    console.log(json)
}

let cities_select = document.getElementById("city");
["Rovaniemi", "Helsinki", "Paris", "London", "Madrid"].forEach(city => {
    let option = document.createElement("option")
    option.value = city
    option.innerText = city
    cities_select.appendChild(option)
})