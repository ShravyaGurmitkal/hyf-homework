const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];

function getEventWeekday(days) {
    const todaysDate = new Date();
    const eventDate = new Date(todaysDate); 
    eventDate.setDate(eventDate.getDate() + days);
    return weekdays[eventDate.getDay()];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(3));