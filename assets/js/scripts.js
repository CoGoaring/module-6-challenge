// where we plant data
const currentDay = document.querySelector(`.currentDay`);
const futureForecast = document.querySelector(`.futureForecast`);
const cityInput = document.querySelector(`#search-button`);
const obj = {
    method: `GET`,
}
// this is so we have a default
const cities = JSON.parse(localStorage.getItem("cities") || "[]");
const cityArray = [];

const readInput = function() {
    const city = document.querySelector(`#site-search`).value.trim();
    // save our cities
    cities.push(city);
    localStorage.setItem(`cities`, JSON.stringify(cities))
    // <---- use our data to call api instantly
    getGeoData(city);
}

const getGeoData = function(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=06980c8a4c40c693c753e51415947f5b`, 
    obj).then(response => response.json().then(function (data) {
        getWeatherData(data[0].lat, data[0].lon);
        // console.log(data[0].lat);
        // console.log(data[0].lon);
        // testing lat and lon for fun
      }));
}
const getWeatherData = function(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=06980c8a4c40c693c753e51415947f5b`,
    obj).then(response => response.json().then(function (data) {
        print(data);
        display(data);
      }));
}
// console gives me my data, i can start working on the rest of this now :)
function print(data) {
    console.log(data);
}

function display(data) {

}



// getWeatherData();

cityInput.addEventListener(`click`, readInput);