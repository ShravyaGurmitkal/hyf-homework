//Assigning api key to the variable
const apiKey = '2a984eff06dbace9308d2bcf60b5e917';
let weatherApi;

//function that gets the html elements by id
function getHtmlMarkup(idName) {
    return document.getElementById(idName);
}



//
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let todayDate;
const todaysDate =  getHtmlMarkup('todaysDateH2');
const currentTime = getHtmlMarkup('currentTimeH2');
const currentDetailsUl = getHtmlMarkup('currentDetailsUlMarkup');
//below functions trigger when the page is loaded
document.addEventListener('DOMContentLoaded', onLoad);

//call the function to get the current date and time in your location and get the last city searched from the local storage
function onLoad() {
    getcurrentDetails();
    const cityName = localStorage.getItem('cityName');
    if(cityName) {
       getWeatherByCity(cityName);
    }
}
// function to get the current date and time in your location
function getcurrentDetails () {
    todayDate = new Date();
    todaysDate.innerHTML = todayDate.toLocaleDateString(undefined, options);
    currentTime.innerHTML = todayDate.toLocaleTimeString('en-US');
}
setInterval(getcurrentDetails, 1000); //to update time every second


//get user entered city location and set the cityname in the API link when get the city location weather button clicked
const weatherButton = getHtmlMarkup('weatherButtonMarkup');

weatherButton.addEventListener('click', () => {
    const cityInput = getHtmlMarkup('cityInputMarkup').value.trim();
    (cityInput)? getWeatherByCity(cityInput) : alert('Please Enter The City Name');;
});

function getWeatherByCity(city) {
    weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    displayWeatherData(weatherApi);
}


//get the current location coordinates and set the coordinates in the API link when get the current location weather button clicked
const currentlocationweather = getHtmlMarkup('currentlocationweatherButton');
let locationLatitude;
let locationLongitude;

currentlocationweather.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(success,error);
});

function success(pos) {
    var crd = pos.coords;
    locationLatitude = crd.latitude;
    locationLongitude = crd.longitude;
    
    weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${locationLatitude}&lon=${locationLongitude}&appid=${apiKey}&units=metric`;
    displayWeatherData(weatherApi);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


//Displaying all the weather details in the html page
function displayWeatherData(weatherApi) {
    fetch(weatherApi)
    .then(response => response.json())
    .then(weatherData => {
        
        //Storing the cityname in the local storage
        localStorage.setItem('cityName', weatherData.name);
        
        //City Name
        getHtmlMarkup('cityname').innerHTML = `${weatherData.name}`;
       
        //Temperature in celsius
        getHtmlMarkup('temperature').innerHTML = `${weatherData.main.temp} °C`;
  
        //Weathericon
        getHtmlMarkup('weatherIcon').src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        
       //Cloud Description and percentage
        getHtmlMarkup('cloudyDetails').innerHTML = `${weatherData.weather[0].description.toUpperCase()} - ${weatherData.clouds.all}%`;
       
        //feels like temperature in celsius
        getHtmlMarkup('feelsLike').innerHTML = `Feels_Like: ${weatherData.main.feels_like} °C`;
      
        //Wind speed in meter/second
        getHtmlMarkup('windSpeed').innerHTML = `Wind Speed: ${weatherData.wind.speed} m/sec`;
        
        
        getHtmlMarkup('timeinfo').innerHTML = `Below time is the time in city location ${weatherData.name.toUpperCase()} and not displayed according to your current location`
        
        //current Time and date in the selected city, it updates only when the page refresh's
        const todayDateTimeUtc = todayDate.getTime() + (todayDate.getTimezoneOffset() * 60000);
        const todayLocationDateTime = new Date(todayDateTimeUtc + (weatherData.timezone * 1000));

        getHtmlMarkup('locationCurrentDate').innerHTML = `Today's Date: ${todayLocationDateTime.toLocaleDateString()}`
        getHtmlMarkup('locationCurrentTime').innerHTML = `Current Time: ${todayLocationDateTime.toLocaleTimeString("en-US")}`
       
        //Sunrise and Sunset time in the city location 
        const dateTime1 = new Date(weatherData.sys.sunrise * 1000);
        const dateTime2 = new Date(weatherData.sys.sunset * 1000);
        const dateTime1Utc = dateTime1.getTime() + (dateTime1.getTimezoneOffset() * 60000);
        const dateTime2Utc = dateTime2.getTime() + (dateTime2.getTimezoneOffset() * 60000);
        const sunriseDateTime = new Date(dateTime1Utc + (weatherData.timezone * 1000));
        const sunsetDateTime = new Date(dateTime2Utc + (weatherData.timezone * 1000));

        getHtmlMarkup('sunrise').innerHTML = `Sunrise : ${sunriseDateTime.toLocaleTimeString("en-US")}`;
        getHtmlMarkup('sunset').innerHTML = `Sunset : ${sunsetDateTime.toLocaleTimeString("en-US")}`;
       
        //embeding the city location on map in the html page
        const map = getHtmlMarkup('mapLocation')
        map.src = `https://maps.google.com/maps?q=${weatherData.coord.lat},${weatherData.coord.lon}&output=embed`

    })
}

//for reference
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(weatherData => {
//         console.log(weatherData);
//         console.log('The chosen city: ' + weatherData.name);
//         console.log(`Temperature: ${weatherData.main.temp}`);
//         console.log(`Icon for the weather type: ${weatherData.weather[0].icon}, \n http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
//         console.log(`How clowdy it is: ${weatherData.weather[0].description} - ${weatherData.clouds.all}%`);
//         console.log(`Feels_Like: ${weatherData.main.feels_like} °C`);
//         console.log(`Wind Speed: ${weatherData.wind.speed}`);
//         console.log(`Location Time: ${todayLocationDateTime}`);
//         console.log(`When sunrise and sunset is \n sunrise: ${new Date(weatherData.sys.sunrise * 1000)} \n sunset: ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}`);
//         console.log(map);
//     })
