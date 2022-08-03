function setTimeoutPromise(milliseconds) {
    return new Promise((resolve, reject) => {
        if(typeof milliseconds !== "number") {
            reject(`milliseconds passed should be a number`);
        }
        setTimeout(resolve, milliseconds);
    })
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
  })
  .catch((error) => console.error(error));


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getCurrentLocation()
    .then((position) => {
      // called when the users position is found
      console.log(position);
      console.log(`lattitude: ${position.coords.latitude}\nlongitude: ${position.coords.longitude}`)
    })
    .catch((error) => {
      // called if there was an error getting the users location
      console.log(error);
    });