class Pellet extends Padre {
    constructor(x, y) {
        super(x, y);
        this.radius = 4;
    }
    draw() {
        //console.log("X: "+this.x,"Y: "+this.y);
        ctx.beginPath();
        ctx.fillStyle = "white";
        // ctx.arc(x1, y1, r, startAngle, endAngle);
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        //RELLENO CIRCULO
        ctx.fill();
    }
}
class PowerUp extends Padre {
    constructor(x, y) {
        super(x, y);
        this.radius = 10;
    }
    draw() {
        //console.log("X: "+this.x,"Y: "+this.y);
        ctx.beginPath();
        ctx.fillStyle = "rgba(250,250,0)";
        // ctx.arc(x1, y1, r, startAngle, endAngle);
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        //RELLENO CIRCULO
        ctx.fill();
    }
}

var pellets = [];
var power_up = [];