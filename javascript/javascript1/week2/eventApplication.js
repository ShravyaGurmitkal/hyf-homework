function getEventWeekday(days) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];
    const todaysDate = new Date();
    const eventDate = new Date(todaysDate);
    eventDate.setDate(eventDate.getDate() + days);
    return weekdays[eventDate.getDay()];
}

console.log(getEventWeekday(31));
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));