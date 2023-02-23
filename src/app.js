function formatdate(timestamp) {
   let date = new Date (timestamp);
   let hours = date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
     }
   let mintues = date.getMinutes();
   if (mintues < 10) {
    mintues = `0${mintues}`;
   }
   let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
   ];
   let day = days[date.getDay()];
   return `${day} ${hours}:${mintues}`; 
}

function displayForecast() {
  forecastElement = document.querySelector("#forecast");


let days = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];

let forecastHTML = `<div class="row">`;
days.forEach(function(day) {

  forecastHTML = forecastHTML +
    `
  
            <div class="col-2"> 
             <div class="weather-forecast-date">${day}</div>
            <img src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="" width="42" 
            />
            <div class="weather-forecast-temperature">
                <span class="weather-forecast-temperature-max">18°</span>
                 <span class="weather-forecast-temperature-min">12°</span>
            </div>
        </div>   
 `;
}) 
 forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
console.log(forecastHTML);
}


function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");


celsiusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round (response.data.wind.speed);
dateElement.innerHTML = formatdate(response.data.dt * 1000 );
iconElement.setAttribute("src",
`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute;(
    "alt", response.data.weather[0].description);
}


function search(city) {
    let apikey = "3f4f91f0ebfedb870f80d872256e48f7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
   
}



function handleSubmit(event) {
    event.preventDefault();
    let citInputElement = document.querySelector("#city-input");
    search(citInputElement.value);
    console.log(citInputElement.value);
}




function displayfahrenheitTemeperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrenheitTemeperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemeperature);

}
function displaycelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

   let celsiusTemperature = null;

    
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);


let celsiusLink = document.querySelector("#celsius-link");
 celsiusLink.addEventListener("click", displaycelsiusTemperature);


let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayfahrenheitTemeperature);

search("Berlin");
displayForecast();
