var canvas = document.querySelector('#homeCanvas');

canvas.width = window.innerHeight;
canvas.height = window.innerHeight;

// context
var c = canvas.getContext('2d');
console.log(canvas);
//Rectangle
// c.fillRect(x,y,width,height);
// c.fillStyle = 'rgba(100,0,0,.9)';
// c.fillRect(100,100,10,10);
// c.fillStyle = 'rgba(0,200,0,.5)'; 
// c.fillRect(200,100,10,10);
// c.fillStyle = 'rgba(0,200,0,.5)'; 
// c.fillRect(300,100,10,10);

//Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(100,300);
// c.lineTo(200,150);
// c.strokeStyle = "#b4d455";
// c.stroke();


//multi circle

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function (){
        c.beginPath();
        c.arc(x,y,10,0,Math.PI * 2, false);
        // c.strokeStyle = 'rgba('+r+','+g+','+b+','+v+')';
        c.strokeStyle = 'white';
        c.stroke();
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

var circle = new Circle(
    Math.random() *innerWidth,
    Math.random() *innerHeight,
    10,
    10,
    30
);

// for (var i=1; i<100; i++) {
    // var r = Math.random()*100;
    // var b = Math.random()*100;
    // var g = Math.random()*100;
    // var v = Math.random();
// }

var x = Math.random() *innerWidth;
var y = Math.random() *innerHeight;
var dx = 10;
var dy = 10
var radius = 30;

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth,innerHeight);
    circle.update();
    // console.log('testing animate');
    // c.beginPath();
    // c.arc(x,y,10,0,Math.PI * 2, false);
    // // c.strokeStyle = 'rgba('+r+','+g+','+b+','+v+')';
    // c.strokeStyle = 'white';
    // c.stroke();

    
}

animate();