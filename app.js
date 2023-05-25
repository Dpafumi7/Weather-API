let apiKey = "cfe34a825f8c34efa166608d8e2a605a";
let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

let search = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  let response = await fetch(apiURL + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}

searchButton.addEventListener("click", () => {
  checkWeather(search.value);
});
