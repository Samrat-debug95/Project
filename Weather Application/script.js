let API_Key = "88f1fa39f41dc6b99f7edac973f3747e"
let cityName = document.querySelector(".weather-city")
let dateTime = document.querySelector(".weather-date-time")
let w_forcast = document.querySelector(".weather_forcast")
let w_icon = document.querySelector(".weather_icon")
let w_temp = document.querySelector(".weather_temp")
let w_minTem = document.querySelector(".weather_min")
let w_maxTem = document.querySelector(".weather_max")

let w_feelslike = document.querySelector(".weather_feelslike")
let w_humidity = document.querySelector(".weather_humidity")
let w_wind = document.querySelector(".weather_wind")
let w_pressure = document.querySelector(".weather_pressure")

let citySearch = document.querySelector(".weather_search")

const getCountryName = (code) => {
    return new Intl.DisplayNames([code], {type: "region"}).of(code)
};


const getDateTime = (dt) => {
    const curDate = new Date(dt * 1000)
    console.log(curDate);
    
    const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
};

const formater = new Intl.DateTimeFormat("en-US", option)
return formater.format(curDate)

}

let city = "kolkata";

citySearch.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = document.querySelector(".city_name")
    console.log(cityName.value);
    
    city = cityName.value;
    getWeatherData();
    cityName.value = "";
})

const getWeatherData = async () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=88f1fa39f41dc6b99f7edac973f3747e`
    try {
        const resp = await fetch(weatherURL)
        const data = await resp.json()
        // console.log(data);

        const {main, name, weather, wind, sys, dt} = data;
        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`
        dateTime.innerHTML = getDateTime(dt)
        w_forcast.innerHTML = `${weather[0].main}`
        w_icon.innerHTML = `<img scr="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png">`
        w_temp.innerHTML = `${main.temp}&#176`
        w_minTem.innerHTML = `Min: ${main.temp_min}&#176`
        w_maxTem.innerHTML = `max: ${main.temp_max}&#176`

        w_feelslike.innerHTML = `${main.feels_like}&#176`
        w_humidity.innerHTML = `${main.humidity}&#176`
        w_pressure.innerHTML = `${main.pressure}&#176`
        w_wind.innerHTML = `${main.speed}&#176`
        
    } catch (error) {
        console.log(error);
        
    }
}

document.body.addEventListener("load", getWeatherData())