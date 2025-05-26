function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
}
let button = document.querySelector("#iniate-search");
button.addEventListener("click", showCity);
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b9aaeaaf97004f2a03afob830bt63baf&units=imperial`;
let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";
axios.get(
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
);
axios.get(apiUrl).then(response);

response = response.data;
console.log(response.data);
