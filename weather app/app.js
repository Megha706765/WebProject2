//const apiKey ="ab0815b003f757bcd9308e23d10ea672"
//const apiKey ="a8b70b46d35c851efae73a4b089741a4"
//const apiKey ="a847f669139941b5e07f5ffc55095d80"
//const apiKey = "cf22c937acafceb257cec8817eaaf1a5"


const apiKey = "172359ecc640bd91427c61bd225ceace"

const weatherDataEle = document.querySelector(".weather-data")
const cityNameEle = document.querySelector("#city-name")
const formEle = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formEle.addEventListener("submit", (e) => {
    e.preventDefault()
    //console.log(cityNameEle.value)
    const cityValue = cityNameEle.value

    getWeatherData(cityValue)
})

async function getWeatherData(cityValue) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if (!response.ok) {
            throw new Error("Network response is not ok!")



        }

        const data = await response.json()
        //console.log(data);


        const temprature = Math.floor(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [
            `Feels Like: ${Math.floor(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherDataEle.querySelector(".temp").textContent = `${temprature}°C`

        weatherDataEle.querySelector(".desc").textContent = `${description}`

        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`

        weatherDataEle.querySelector(".details").innerHTML = details.map((details) => {
            return `<div>${details}</div>`
        }).join("")

    } catch (err) {
      console.error("Error fetching weather data:", err.message);
    }
}