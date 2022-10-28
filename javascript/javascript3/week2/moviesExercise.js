//Create an array of bad movies and an array of bad movies since year 2000
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(moviesData => {
        //console.log(moviesData);
        const badMoviesArray = moviesData.filter(movie => movie.rating < 4);
        console.log(badMoviesArray);
        const badMoviesFrom2000 = badMoviesArray.filter(movie => movie.year >= 2000);
        console.log(badMoviesFrom2000);
    })