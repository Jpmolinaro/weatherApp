const apiKey = "35c459541569b4b932dc648f252275e9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`; 
//units=metric for precise temperature
//&q={cityName}
//&appid={apiKey}

let input = document.querySelector(".searchCity");
let weatherImage = document.querySelector(".weather-image");
let temperature = document.querySelector(".temperature");
let cityName = document.querySelector(".city");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");

//Adding a click event to the button in order to call checkWeather function
document.querySelector('.button').addEventListener("click", () => {
    console.log(input.value);
    checkWeather();
});


//Requesting weather information using the api and passing data to the functions responsible for load the content
async function checkWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURI(input.value)}&appid=35c459541569b4b932dc648f252275e9`;
    let response = await fetch(url);
    var data = await response.json();
    console.log(data);  

    loadData(data);
    loadImage(data);
};


//Function responsible to load the correct local weather information
function loadData(data){
    temperature.innerHTML = `<h1>${Math.floor(data.main.temp)}°C</h1>`;
    cityName.innerHTML = `<h2>${data.name}</h2>`;
    wind.innerHTML = `<p>${Math.floor(data.wind.speed*3.6)}km/h</p>`; //To convert wind speed from m/s to km/h
    humidity.innerHTML = `<p>${Math.floor(data.main.humidity)}%</p>`;
}


//Function responsible to load the correct weather image
function loadImage(data){
    switch(data.weather[0].main){

        case 'Rain': weatherImage.setAttribute("src", "images/rain.png");
        break;

        case 'Clear': weatherImage.setAttribute("src", "images/clear.png");
        break;

        case 'Clouds': weatherImage.setAttribute("src", "images/clouds.png");
        break;

        case 'Drizzle': weatherImage.setAttribute("src", "images/drizzle.png");
        break;

        case 'Mist': weatherImage.setAttribute("src", "images/mist.png");
        break;

        case 'Snow': weatherImage.setAttribute("src", "images/snow.png");
        break;
    }
}


