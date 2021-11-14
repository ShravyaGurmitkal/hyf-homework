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
//adding new series to the array
seriesDurations.push ({
    title: "Shinchan",
    days: 5,
    hours: 18,
    minutes: 25,
});
console.log(seriesDurations);

let totalDurationOfSeries = 0;

function logOutSeriesText() {
    for (series of seriesDurations) {
        const durationOfSeries = ((series.days * 24) + series.hours + (series.minutes / 60)) / (80 * 365 * 24);
        console.log(`${series.title} took ${+(durationOfSeries * 100).toFixed(3)}% of my life`)
        totalDurationOfSeries += durationOfSeries;
    }
    console.log(`\nIn total that is ${+(totalDurationOfSeries * 100).toFixed(2)}% of my life`);
}
  
logOutSeriesText();