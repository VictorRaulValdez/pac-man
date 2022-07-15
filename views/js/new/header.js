var frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var canvas;
var ctx;

canvas = document.querySelector("#lienzo");
ctx = canvas.getContext("2d");
let vida = document.querySelector("#vidas ul");
const score = document.querySelector("#score p span");

class Padre {
    constructor(x, y, xv, yv) {
        this.x = x;
        this.y = y;
        this.xv = xv;
        this.yv = yv;
    }
    rotarVector(x, y, radianes) {
        var grad = (radianes / 180) * Math.PI;
        var coseno = Math.cos(grad);
        var seno = Math.sin(grad);
        var x2 = x * coseno - y * seno;
        var y2 = x * seno + y * coseno;
        return [x2, y2];
    }
};


function loadImage(source) {
    let image = new Image();
    image.src = source;
    return image;
}