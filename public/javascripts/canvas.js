var canvas = document.querySelector('#introCanvas');

canvas.width = window.innerWidth*2;
canvas.height = window.innerHeight*.70;

// context
var c = canvas.getContext('2d');
console.log(canvas);
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function (){
        c.beginPath();
        c.arc(x,y,Math.floor(Math.random() * 6) + 1  ,0,Math.PI * 2, false);
        c.strokeStyle = 'rgba(255, 255, 255, 0.342)';
        c.stroke();
        c.fillStyle = 'rgba(255, 255, 255, 0.342)';
        c.fill();
    }
    this.update = function (){
        if (this.x + this.radius > innerWidth 
            || this.x-this.radius < 0){
            this.dx=-this.dx;
        }
    
        if (this.y + this.radius > innerHeight+100 
            || this.y-this.radius < 0){
            this.dy=-this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();

    }
}
var circle;

function addCircles(){
    for (i = 0; i < 10; i++) {
        setTimeout(() => {
        i=10;

            
        circle = new Circle(
            Math.random() *innerWidth,
            Math.random() *innerHeight,
            10,
            10,
            30 
        );
    }, 500);
    }
}

var x = Math.random() *innerWidth;
var y = Math.random() *innerHeight;
var dx = 10;
var dy = 10
var radius = 30;

function animate(){
    setTimeout(() => {
    requestAnimationFrame(animate);
          
}, 50);
    // console.log('Create Circle')
    addCircles();
    circle.update();
}

animate();