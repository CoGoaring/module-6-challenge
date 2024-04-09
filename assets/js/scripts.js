// where we plant data
const currentDay = document.querySelector(`.currentDay`);
const futureForecast = document.querySelector(`.futureForecast`);

// where we get data
// api key: :3
const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`;
const weatherURL = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

const getWeatherData = function(lat, lon) {
    fetch(quotesURL, obj).then(response => response.json().then(function (data) {
        test(data);
      }));
}

function test(data) {
    console.log(data);
}


getWeatherData();