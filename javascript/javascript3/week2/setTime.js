//Calling this function will return a promise that resolves after the resolveAfter seconds has passed
function setTime(resolveAfter) {
    return new Promise((resolve, reject) => {
      if(typeof resolveAfter !== "number") {
        reject(`Time passed should be a number`);
    }
      setTimeout(resolve, resolveAfter * 1000)
    });  
}

//using it with async/await
async function asyncSetTime () {
  await setTime(4).then(() => console.log("I am called asynchronously"))
        .catch((error) => console.log(error));
  console.log('This logs after the promise is resolved as we used await')
}

setTime(2).then(() => {
    console.log("I am called asynchronously");
  })
  .catch((error) => console.log(error));

asyncSetTime();
