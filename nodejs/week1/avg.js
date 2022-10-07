const myArgs = process.argv.slice(2);
let numArray =[];
let total = 0;
let countOfNumbers = 0;

if(myArgs.length === 0) {
    console.log('Please specify some args the array is empty');
} else {
    myArgs.forEach(arg => {
        const parsedArg = parseFloat(arg);
        if(!isNaN(parsedArg)) {
            numArray.push(parsedArg);
            total += parsedArg;
            countOfNumbers++;
        }
    });
}

if(countOfNumbers > 0) {
    console.log(`The average of given numbers ${numArray} is ${total / countOfNumbers}`);
} else {
    console.log(`The args you have entered are all string values, Please specify some numbers to calculate average`);
}