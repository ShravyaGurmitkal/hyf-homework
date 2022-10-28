//1 - Log out the text 'Called after 2.5 seconds' 2.5 seconds after the script is loaded
setTimeout(function() {
    console.log('Called after 2.5 seconds');
}, 2500);

//2 - this function should log out the stringToLog after delay seconds
function delayTextFunction(delay, stringToLog) {
    setTimeout(function() {
        console.log(stringToLog);
    }, delay * 1000);
}
delayTextFunction(6, 'This string logged after 6 seconds');
delayTextFunction(3, 'This string logged after 3 seconds');

//3 - When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked
const clickButton = document.querySelector('#clickButtonMarkup');
clickButton.addEventListener('click', function() {
    delayTextFunction(5, 'Called after 5 seconds of clicking button');
});

//4 - variable function call
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');

function planetLogFunction(functionCall) {
    functionCall();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5 - When this button is clicked the location (latitude, longitude) of the user should be logged out
const logLocationButton = document.getElementById('logLocationMarkup');
logLocationButton.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(success, error);
});

let locationLatitude;
let locationLongitude;

function success(pos) {
    var crd = pos.coords;
    locationLatitude = crd.latitude;
    locationLongitude = crd.longitude;
    document.getElementById('lattitudeMarkup').innerText = `This is the lattitude ${locationLatitude}`;
    document.getElementById('longitudeMarkup').innerText = `This is the longitude ${locationLongitude}`;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

//6 - show the location on a map
let map = document.getElementById('mapFrameMarkup');
map.setAttribute('src', `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.5429904635425!2d${locationLongitude}!3d${locationLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70166f24dba8dc88!2zNTXCsDQzJzU0LjEiTiAxMsKwMjknMDQuNyJF!5e0!3m2!1sen!2sdk!4v1639416424297!5m2!1sen!2sdk`)

//7 - When called the function should wait delay seconds and then call the provided callback function
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}

runAfterDelay(4, function() {
    console.log('callback function string - should be logged after 4 seconds')
});

//8 - If a double click has been detected, log out the text: "double click!"
document.addEventListener('dblclick', function() {
    console.log('double click!')
});

//9 - jokeCreator
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    (shouldTellFunnyJoke) ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
    console.log('This is funny Joke');
}

function logBadJoke() {
    console.log('This is bad Joke');
}

jokeCreator(false, logFunnyJoke, logBadJoke)
jokeCreator(true, logFunnyJoke, logBadJoke)

//10 - Function as a variable
const functionArray = [logRedColor,logWhiteColor,logBlueColor];

function logRedColor() {
    console.log('Red color array[0] function');
}
function logWhiteColor() {
    console.log('White color array[1] function');
}
function logBlueColor() {
    console.log('Blue color array[2] function');
}

for(const func of functionArray) {
    func();
}

// Create a function as a const and try creating a function normally, Call both functions
const constantFunction = function() {
    console.log('function created using const');
}
function normalFunction() {
    console.log('this is normal function');
}

constantFunction();
normalFunction();

//Create an object that has a key whose value is a function. Try calling this function
const functionObject = {
    color: getColor,
}

function getColor() {
    console.log('color is green and this is called by using object key value');
}

functionObject.color();
functionObject['color']();