const myWeather = document.querySelector("#current-weather");
const myForecast = document.querySelector("#forecast");
const dtoday = new Date();
const todayIndex = dtoday.getDay();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// variables to get information from API
const myApiKey = "838ea48cfc01a39015948e0e4bf1d481";
const myLon = "-87.21";
const myLat= "14.08";
const myCount = 3;

// API call for weather data
const myWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myApiKey}&units=metric`;
// APi call for forecast data
const myForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myApiKey}&cnt=${myCount}&units=metric`


async function getWeatherData() {
    try {
        const weatherResponse = await fetch(myWeatherUrl);
        const forecastResponse = await fetch(myForecastUrl);
        if (weatherResponse.ok && forecastResponse.ok) {
            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();
            console.log(forecastData);
            console.log(weatherData);
            createWeatherCards(weatherData, forecastData);
        }

        else {
            throw Error(await weatherResponse.text(), await forecastResponse.text());
        }
        }
    catch(error) {
        console.error("Error fetching directory data:", error);
    }
    
}

function createWeatherCards(weatherData, forecastData) {
    // clear containers to avoid appending every time a card is created
    myWeather.innerHTML = "";
    myForecast.innerHTML = "";

    // variables to handle sunrise and sunset times formatting
    const sunset = dtoday.setTime(weatherData.sys.sunset);
    const sunrise = dtoday.setTime(weatherData.sys.sunrise);

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const weatherCondition = weatherData.weather[0].description;
    myWeather.innerHTML = 
    `
        <h2>${weatherData.name}'s Current Weather</h2>
        <img src="${iconsrc}" alt="${weatherData.weather[0].description} icon">
        <p>
            <span>${weatherData.main.temp}&deg;C</span><br>
            ${weatherData.weather[0].description}<br>
            High: ${weatherData.main.temp_max}&deg;C<br>
            Low: ${weatherData.main.temp_min}&deg;C<br>
            Humidity: ${weatherData.main.humidity}%<br>
            Sunrise: ${Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric"}).format(sunrise)}<br>
            Sunset: ${Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric"}).format(sunset)}
        </p>
    `;

    myForecast.innerHTML = 
    `
        <h2>Weather Forecast</h2>
        <p>
            Today: <span>${forecastData.list[0].main.temp}&deg;C</span><br>
            ${weekdays[todayIndex+1]}: <span>${forecastData.list[1].main.temp}&deg;C</span><br>
            ${weekdays[todayIndex+2]}: <span>${forecastData.list[2].main.temp}&deg;C</span>
        </p>
    `;
}

getWeatherData()