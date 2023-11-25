var apiKey = '2f5fee7f8b7747f31078b723051d688b';
var apiUrl = 'https://api.openweathermap.org/data/2.5';

$(document).ready(function () {
  $('#search-form').on('submit', function (event) {
    event.preventDefault();
    searchWeather();
  });

  $('#history-list').on('click', 'li', function () {
    var cityName = $(this).text();
    getWeather(cityName);
  });

  // Load search history from local storage
  var searchHistory = new Set(JSON.parse(localStorage.getItem('searchHistory')) || []);
  var historyList = $('#history-list');

  for (var cityName of searchHistory) {
    var listItem = $('<li class="button"></li>').text(cityName);
    historyList.append(listItem);
  }
});

function searchWeather() {
  var cityName = $('#city-input').val().trim();

  if (cityName !== '') {
    getWeather(cityName);
    $('#city-input').val('');
  }
}

async function getWeather(cityName) {
  try {
    var currentWeather = await $.getJSON(`${apiUrl}/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    var forecast = await $.getJSON(`${apiUrl}/forecast?q=${cityName}&appid=${apiKey}&units=metric`);

    displayCurrentWeather(currentWeather);
    displayForecast(forecast);
    addToSearchHistory(cityName);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayCurrentWeather(data) {
  var tempInFahrenheit = (data.main.temp * 9/5) + 32;
  var iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  $('#current-weather').html(`
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Date: ${new Date(data.dt * 1000).toLocaleDateString()}</p>
    <img src="${iconUrl}" alt="${data.weather[0].description} Icon">
    <p>Temperature: ${tempInFahrenheit.toFixed(2)}°F</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `);
}

function displayForecast(data) {
  var forecastDiv = $('#forecast').empty();

  for (let i = 0; i < data.list.length; i += 8) {
    var dayData = data.list[i];
    var tempInFahrenheit = (dayData.main.temp * 9/5) + 32;
    var iconUrl = `http://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;

    var forecastDayDiv = $('<div class="forecast-day"></div>').html(`
      <p>Date: ${new Date(dayData.dt * 1000).toLocaleDateString()}</p>
      <img src="${iconUrl}" alt="${dayData.weather[0].description} Icon">
      <p>Temperature: ${tempInFahrenheit.toFixed(2)}°F</p>
      <p>Humidity: ${dayData.main.humidity}%</p>
      <p>Wind Speed: ${dayData.wind.speed} m/s</p>
    `);
    forecastDiv.append(forecastDayDiv);
  }
}

function addToSearchHistory(cityName) {
  var historyList = $('#history-list');

  // Update the Set and local storage
  var searchHistory = new Set(JSON.parse(localStorage.getItem('searchHistory')) || []);
  searchHistory.add(cityName);
  localStorage.setItem('searchHistory', JSON.stringify(Array.from(searchHistory)));

  // Clear and re-populate the history list
  historyList.empty();
  for (var cityName of searchHistory) {
    var listItem = $('<li class="button"></li>').text(cityName);
    historyList.append(listItem);
  }
}