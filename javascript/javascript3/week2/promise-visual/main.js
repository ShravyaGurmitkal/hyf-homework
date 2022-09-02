//
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const span = document.querySelector('span');
const spanValue = span.innerText;

const redCircleTargetPosition = {
    x: 20 - parseInt(redBox.style.left), 
    y: 300 - parseInt(redBox.style.top),
};
const blueCircleTargetPosition = {
    x: 400 - parseInt(blueBox.style.left),
    y: 300 - parseInt(blueBox.style.top),
};
const greenCircleTargetPosition = {
    x: 400 - parseInt(greenBox.style.left),
    y: 20 - parseInt(greenBox.style.top),
};

//translates the circles one at a time from their random start position to their target 
async function translateOneByOne() {
    await moveElement(redBox, redCircleTargetPosition).then(() => {
        console.log("Red Element has been moved");
      });
    
    await moveElement(blueBox, blueCircleTargetPosition).then(() => {
        console.log("Blue Element has been moved");
      });
    
    await moveElement(greenBox, greenCircleTargetPosition).then(() => {
        console.log("Green Element has been moved");
      });
}

//translate the circles one at a time to their random start position
async function translateToStart() {
    span.innerText = '';
    
    await moveElement(redBox, { x:parseInt(redBox.style.left), y:parseInt(redBox.style.top)}).then(() => {
        console.log("Red Element has been moved");
      });
    
    await moveElement(blueBox, { x:parseInt(blueBox.style.left), y:parseInt(blueBox.style.top)}).then(() => {
        console.log("Blue Element has been moved");
      });
    
    await moveElement(greenBox, { x:parseInt(greenBox.style.left), y:parseInt(greenBox.style.top)}).then(() => {
        console.log("Green Element has been moved");
      });
}

//translates all the circles at the same time from their random start position to their target
async function translateAllAtOnce() {
    await Promise.all([
        moveElement(redBox, redCircleTargetPosition),
        moveElement(blueBox, blueCircleTargetPosition),
        moveElement(greenBox, greenCircleTargetPosition)
    ]).then(() => {
        console.log(`All Elements moved at once`);
    });

    span.innerText = spanValue;
}

translateOneByOne();
setTimeout(translateToStart, 7000);
setTimeout(translateAllAtOnce, 13000);