const apiKey = "6ea68d5aa015e1618d5075c56a77ff7e";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=&units=metric";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

async function checkWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  } catch (error) {
    console.error("Error Fetching Weather:", error);
  }
}

searchBtn.addEventListener("click", function() {
  checkWeather(searchBox.value);
});
