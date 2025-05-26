function showCity() {
  let city = document.querySelector("#search-city").value;
  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
}
let button = document.querySelector("#iniate-search");
button.addEventListener("click", showCity);
