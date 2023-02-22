function displayTemperature(response) {
console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");

temperatureElement.innerHTML = Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round (response.data.wind.speed);

}

let apikey = "7b8f40fc3t572a5a95094307o7b10f4a";
let apiUrl = `https://api.shecodes.io/data/v1.weather?q=Berlin&appid={apikey}&units=metric`;

//`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apikey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);

