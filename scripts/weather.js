const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDes = document.querySelector("figcaption");
const myLat = "49.74";
const myLon = "6.63";
const myAPI= "838ea48cfc01a39015948e0e4bf1d481";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myAPI}&units=metric`;

async function getData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
        }
        else {
            throw Error(await response.text());
        }
        
    }
    catch (error) {
        console.log(error);
    }
    
}

function displayData(data) {

    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    captionDes.innerHTML = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
}

getData();
