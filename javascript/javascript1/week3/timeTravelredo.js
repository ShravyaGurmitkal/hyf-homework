const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
function getTravelTime(travelInformation) {
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const timeInHours = Math.trunc(time);
    const timeInMinutes = Math.floor((time - timeInHours) * 60);
    //return timeInHours + ' hours and ' + timeInMinutes + ' minutes ';
    return `${timeInHours} hours and ${timeInMinutes} minutes`
}

const travelTime = getTravelTime(travelInformation); 
console.log(travelTime); // 8 hours and 38 minutes