//below using promises and .then
function waitingTime(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time * 1000);
    })
}

waitingTime(3).then(() => {
    fetch(`https://yesno.wtf/api`)
        .then(response => response.json())
        .then(yesOrNoData => console.log(yesOrNoData));
})

//below using async/await
async function asyncFetchApiData() {
    const fetchResult = await fetch(`https://yesno.wtf/api`);
    const fetchResultJson = await fetchResult.json();
    console.log(fetchResultJson);
}

setTimeout(asyncFetchApiData, 3000)