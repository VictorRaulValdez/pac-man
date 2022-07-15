class Ghosts extends Padre {
    constructor(x, y, xv, yv, color = "red", address = "right", previusDirection = "vertical", image) {
        super(x, y, xv, yv);
        this.radius = 20;
        this.color = color
        this.address = address;
        this.previusDirection = previusDirection;
        this.image = image;
        this.imagePowerUp = loadImage("views/img/ghosts/ghosts_five.png")
        this.ubicaionX = 0;
        this.count = 0;
        this.colorState = false;
    }
    movement() {
        if (this.address == "right") {
            this.aceleracion(-90);
        }
        else if (this.address == "left") {
            this.aceleracion(90);
        }
        else if (this.address == "top") {
            this.aceleracion(180);
        }
        else if (this.address == "bottom") {
            this.aceleracion(0);
        }
        this.x += this.xv;
        this.y += this.yv;
    }
    draw() {
        //console.log("X: "+this.x,"Y: "+this.y);
        if (this.colorState) {
            ctx.drawImage(this.imagePowerUp, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, 10 + (this.radius) * 2, 10 + (this.radius) * 2);
        }
        else {
            ctx.drawImage(this.image, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, 10 + (this.radius) * 2, 10 + (this.radius) * 2);
        }
        if (this.count > 20) {
            if (this.ubicaionX > 6) {
                this.ubicaionX = 0;
            }
            this.ubicaionX++;
            this.count = 0;
        }
        this.count++;
    }
    aceleracion(drg) {
        var cat = this.rotarVector(0, 2.5, drg);
        this.xv = cat[0];
        this.yv = cat[1];
    }
}


var ghosts = [];

////CARGANDO LOS FANTASMAS 

ghosts.push(
    new Ghosts(475, 75, 0, 0, "", "", "", loadImage("views/img/ghosts/ghosts_two.png")),
    new Ghosts(75, 325, 0, 0, "green", "top", "horizontal", loadImage("views/img/ghosts/ghosts_three.png")),
    new Ghosts(675, 275, 0, 0, "pink", "left", "vertical", loadImage("views/img/ghosts/ghosts_four.png"))
)