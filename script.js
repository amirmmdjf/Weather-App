let inputCity = document.querySelector(".search-box")
let city = document.querySelector(".city")
let date = document.querySelector(".date")
let temp = document.querySelector(".temp")
let weather = document.querySelector(".weather")
let hiLowTemp = document.querySelector(".hi-low")
let humidity = document.querySelector(".humidity")


let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    keyCode: '2eb7d8aea661a251fb318da7fdd27616'
}

function fetchData() {
    let cityValue = inputCity.value
    fetch(`${apiData.url}${cityValue}&&appid=${apiData.keyCode}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showData(data)
        })

}

function showData(data) {
    city.innerHTML = `${data.name} , ${data.sys.country}`
    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°c`
    weather.innerHTML = `${data.weather[0].main}`
    hiLowTemp.innerHTML = `${Math.round(data.main.temp_max - 273.15)}°c / ${Math.round(data.main.temp_min - 273.15)} °c`
    date.innerHTML = showDate()
    humidity.innerHTML = `humidity ${data.main.humidity}% `

}

function showDate() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()

    return `${day} ${date} ${month} ${year}`
}

inputCity.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        fetchData()
    }
});
