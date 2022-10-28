const canvas = document.getElementById('canvas');

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        const ctx = canvas.getContext('2d');
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
    }
}

function getrandomValues() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgba(${red},${green},${blue},1)`;
    const randomObject = {
        x : Math.floor(Math.random() * window.innerWidth),
        y : Math.floor(Math.random() * window.innerHeight),
        radius : Math.floor(Math.random() * 49 + 2),
        color,
    }
    return randomObject;
}

//Follow the mouse
document.body.addEventListener("mousemove", function(e){
    const randomObject = getrandomValues();
    const circle = new Circle(e.pageX, e.pageY, randomObject.radius, 0, 2*Math.PI, randomObject.color);
    circle.draw();
});

//Every 1000ms create a new circle instance and draw that to the canvas
const randomCircleInterval = setInterval(() => {
    const randomObject = getrandomValues();
    const circle = new Circle(randomObject.x, randomObject.y, randomObject.radius, 0, 2*Math.PI, randomObject.color);
    circle.draw();
}, 100);

setTimeout(() => {
    clearInterval(randomCircleInterval);
},1000)