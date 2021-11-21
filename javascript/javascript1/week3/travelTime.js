const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
function calculateTravelTime(travelInfo) {
    const time = travelInfo.destinationDistance / travelInfo.speed;
    const timeInHours = Math.trunc(time);
    const timeInMinutes = Math.floor((time - timeInHours) * 60);
    return `${timeInHours} hours and ${timeInMinutes} minutes`
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);