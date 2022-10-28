// 1 -> Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded
setTimeout(function() {
    console.log('Called after 2.5 seconds');
}, 2500);


// 2 -> Calling this function should log out the stringToLog after delay seconds
function delayingText(delay, stringToLog) {
    setTimeout(function() {
        console.log(stringToLog);
    }, delay*1000);
}
delayingText(5, 'This string is logged after 4 seconds');
delayingText(1.5, 'This string is logged after 1.5 seconds');
delayingText(3, 'This string is logged after 3 seconds');


// 3 -> a button in html. When clicking this button, use the function you created in the previous task to log out the text:
const timerButton = document.getElementById('timerButtonMarkup');
timerButton.addEventListener('click', () => {
    delayingText(5, 'This string is logged after 5 seconds');
});


// 4 -> 
function earthLogger() {
    console.log('Earth');
}
function saturnLogger() {
    console.log('Saturn');
}
function planetLogFunction(planetLogger) {
    planetLogger();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);


// 5 -> 
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

// 6 -> show the location on a map
let map = document.getElementById('mapFrameMarkup');
map.setAttribute('src', `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.5429904635425!2d${locationLongitude}!3d${locationLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70166f24dba8dc88!2zNTXCsDQzJzU0LjEiTiAxMsKwMjknMDQuNyJF!5e0!3m2!1sen!2sdk!4v1639416424297!5m2!1sen!2sdk`)


// 7 -> 
function runAfterDelay(delay, callback) {
    setTimeout(callback, 7*1000)
}

runAfterDelay(4, function() {
    console.log('should be logged after 7 seconds');
});


// 8 -> Check if we have double clicked on the page
document.addEventListener('dblclick', function() {
    console.log('double click!')
})


// 9 -> 
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    (shouldTellFunnyJoke)? logFunnyJoke() : logBadJoke();
}

const logFunnyJoke = () => {
    console.log('funny joke hahaha haaaahaaa!!!!');
}

const logBadJoke = () => {
    console.log('Bad joke :<');
}

jokeCreator(false, logFunnyJoke, logBadJoke);
jokeCreator(true, logFunnyJoke, logBadJoke);


// 10 -> Function as a variable
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const funcArray = [logRedColor,logWhiteColor,logBlueColor];

function logRedColor() {
    console.log('Red color array[0] function');
}
function logWhiteColor() {
    console.log('White color array[1] function');
}
function logBlueColor() {
    console.log('Blue color array[2] function');
}

for(const func of funcArray) {
    func();
}

// Create a function as a const and try creating a function normally. Call both functions.
const funcConst = function() {
    console.log('function created using const');
}
function normalFunc() {
    console.log('this is normal function');
}

funcConst();
normalFunc();

//Create an object that has a key whose value is a function
const funcObj = {
    color: getColor,
}

function getColor() {
    console.log('color is green and this is called by using object key value');
}

funcObj['color']();