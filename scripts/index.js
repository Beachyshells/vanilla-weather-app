let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function capitalizeWords(cityInput) {
  return cityInput
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function updateTime() {
  let now = new Date();
  let currentDay = days[now.getDay()];
  let today = document.getElementById("todays-day");
  today.innerHTML = currentDay;

  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  let hoursElement = document.getElementById("hours");
  let minutesElement = document.getElementById("minutes");

  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  minutesElement.innerHTML = currentMinute;
  hoursElement.innerHTML = currentHour;
}
updateTime();
setInterval(updateTime, 1000);

function displayWeather(response) {
  console.log(response.data);

  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector(".wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let temperatureElement = document.querySelector(".current-temp");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  temperatureElement.style.display = "inline";

  let degreeElement = document.querySelector("#degree");
  degreeElement.style.display = "inline";

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let iconElement = document.querySelector("#weather-icon");
  iconElement.src = response.data.condition.icon_url;
}

function getWeather(city) {
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b9aaeaaf97004f2a03afob830bt63baf&units=imperial`;
  axios.get(url).then(displayWeather);
}

function showCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#search-city").value;
  let capitalizedCity = capitalizeWords(cityInput);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = capitalizedCity;

  getWeather(cityInput);
  console.log(cityInput);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);
