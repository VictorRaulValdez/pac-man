
var datos_movement = {
    top: false,
    bottom: false,
    right: false,
    left: false
};


class pacMan extends Padre {
    constructor(x, y, xv, yv) {
        super(x, y, xv, yv);
        this.radius = 20;
        this.image_x = loadImage("views/img/ghosts/pac-man.png");
        this.image_x2 = loadImage("views/img/ghosts/pac-man-left.png");
        this.image_y = loadImage("views/img/ghosts/pacman-top.png");
        this.image_y2 = loadImage("views/img/ghosts/pacman-bottoom.png");
        this.image_stop = loadImage("views/img/ghosts/pac-man-stop.png");
        this.ubicaionX = 0;
        this.time = 0;
        this.address = "stop";
    }
    movement() {
        if (datos_movement.top) {///arriba
            this.aceleracion(90);
            this.address = "left";
        }
        else if (datos_movement.bottom) {//abajo
            this.aceleracion(-90);
            this.address = "right";
        }
        else if (datos_movement.right) {//derecha
            this.aceleracion(180);
            this.address = "top";
        }
        else if (datos_movement.left) {//izquierda
            this.aceleracion(0);
            this.address = "bottom";
        }

        this.x += this.xv;
        this.y += this.yv;

    }
    draw() {
        // ctx.drawImage(this.image,0,0,50,50,0,0,50,50)
        //console.log("X: "+this.x,"Y: "+this.y);

        if (this.address == "right") {
            ctx.drawImage(this.image_x, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, (this.radius) * 2, (this.radius) * 2);
        }
        else if (this.address == "left") {
            ctx.drawImage(this.image_x2, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, (this.radius) * 2, (this.radius) * 2);
        }
        else if (this.address == "top") {
            ctx.drawImage(this.image_y, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, (this.radius) * 2, (this.radius) * 2);
        }
        else if (this.address == "bottom") {
            ctx.drawImage(this.image_y2, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, (this.radius) * 2, (this.radius) * 2);
        }
        else if (this.address == "stop") {
            ctx.drawImage(this.image_stop, 50 * this.ubicaionX, 0, 50, 50, this.x - this.radius, this.y - this.radius, (this.radius) * 2, (this.radius) * 2);
        }


        if (this.ubicaionX > 4) {
            this.ubicaionX = 0;
        }
        this.ubicaionX++;

    }
    teclado() {
        document.addEventListener("keydown", function (tecla) {
            tecla.preventDefault();
            console.log(tecla.keyCode);
            switch (tecla.keyCode) {
                case 37: datos_movement.top = true; break;
                case 39: datos_movement.bottom = true; break;
                case 38: datos_movement.right = true; break;
                case 40: datos_movement.left = true; break;
            }
        });
        document.addEventListener("keyup", function (tecla) {
            switch (tecla.keyCode) {
                case 37: datos_movement.top = false;
                case 39: datos_movement.bottom = false;
                case 38: datos_movement.right = false;
                case 40: datos_movement.left = false;
                default: break;
            }
        });
    }

    aceleracion(drg) {
        var cat = this.rotarVector(0, 3, drg);
        this.xv = cat[0];
        this.yv = cat[1];

    }

}