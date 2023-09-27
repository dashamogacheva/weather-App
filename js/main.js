const form = document.body.querySelector('.form-search');
const inputCity = document.body.querySelector('.input-city');
const temperature = document.body.querySelector('.weather-degree');
const city = document.body.querySelector('.city');
const weatherIcon = document.body.querySelector('.weather-icon-src');
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';

export async function getCityWeatherNow(currentCity) {
    const cityName = currentCity;
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let response = await fetch(url);
    try {
        let json = await response.json();
        console.log(json);
        let icon = json.weather[0].icon;
        weatherIcon.src = './assets/weather-icons/' + `${icon}` + '.png';
        city.textContent = json.name;
        let temp = Math.round(json.main.temp - 273);
        temperature.textContent = `${temp}` + `°`;
        getDetails(json);

        // storage.saveCurrentCities(cityName);

    } catch (err) {
        alert(err);
    }

}

form.addEventListener('submit', e => {
    e.preventDefault();
    getCityWeatherNow(inputCity.value);
    e.target.reset();
});

const cityDetails = document.querySelector('.locations-title');
const temperatureDetails = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels-like');
const weatherDetails = document.querySelector('.weather');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');

export async function getDetails(json) {
    try {
        cityDetails.textContent = json.name;
        temperatureDetails.textContent = `Temperature: ${Math.round(json.main.temp - 273)}` + `°`;
        feelsLike.textContent = `Feels like: ${Math.round(json.main.feels_like - 273)}` + `°`;
        weatherDetails.textContent = `Weather: ${json.weather[0].main}`;
        sunrise.textContent = `Sunrise: ${new Date(json.sys.sunrise * 1000).toLocaleTimeString().slice(0, -3)}`;
        sunset.textContent = `Sunset: ${new Date(json.sys.sunset * 1000).toLocaleTimeString().slice(0, -3)}`;
    } catch (err) {
        alert(err);
    }
}