const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
];

seriesDurations.push({
    title: "Doremon",
    days: 4,
    hours: 2,
    minutes: 40,
});

console.log(seriesDurations)

function logOutSeriesText() {
    // write code here
    let totalSeriesDuration = 0;
    for(series of seriesDurations) {
        const seriesDuration = ((series.days * 24) + (series.hours) + (series.minutes / 60)) / (80 * 365 * 24);
        totalSeriesDuration += seriesDuration;
        console.log(`${series.title} took ${+(seriesDuration * 100).toFixed(3)}% of my life`)
    }

    console.log(`In total that is ${+(totalSeriesDuration * 100).toFixed(2)}% of my life`)
}
  
logOutSeriesText(); // logs out the text found above