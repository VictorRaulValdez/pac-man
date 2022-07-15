class Boundary {

    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = image;
    }
    draw() {
        /*ctx.fillStyle = "blue";
        ctx.fillRect(this.x , this.y , this.width, this.height);*/

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
}
var bloques = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
    ['|', ' ', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '[', ']', '.', 't', '.', 't', '.', '*', '.', 't', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '|', '.', '|', '.', '.', '.', 'b', '.', '.', '.', '.', '|'],
    ['|', '.', 't', '.', '[', '-', ']', '.', '|', '.', '|', '.', 't', '.', '.', '.', '1', '2', '.', '|'],
    ['|', '.', 'b', 'p', '.', '.', '.', '.', '|', '.', '|', '.', 'b', '.', '.', '.', '4', '3', '.', '|'],
    ['|', '.', '.', '.', 't', '.', 't', '.', '|', '.', '|', '.', '.', '.', 't', '.', '.', '.', '.', '|'],
    ['|', '.', '*', '.', 'b', '.', 'b', '.', 'b', '.', 'b', '.', '*', '.', 'b', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'p', '.', '.', '.', '.', '.', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
];
var boundaries = [];
var power_up = [];
var pellets = [];


bloques.forEach((row, i) => {
    row.forEach((column, j) => {
        switch (column) {
            case '-':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/pipeHorizontal.png")
                ))
                break;
            case '|':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/pipeVertical.png")
                ))
                break;
            case '1':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/pipeCorner1.png")
                ))
                break;
            case '2':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/pipeCorner2.png")
                ))
                break;
            case '3':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/pipeCorner3.png")
                ))
                break;
            case '4':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/pipeCorner4.png")
                ))
                break;
            case '[':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/capLeft.png")
                ))
                break;
            case ']':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/capRight.png")
                ))
                break;
            case 't':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/capTop.png")
                ))
                break;
            case 'b':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/capBottom.png")
                ))
                break;
            case '*':
                boundaries.push(new Boundary(
                    j * 50,
                    i * 50,
                    loadImage("views/img/assets/block.png")
                ))
                break;
            case '.':
                pellets.push(new Pellet(
                    j * boundaries[0].width + (boundaries[0].width / 2),
                    i * boundaries[0].width + (boundaries[0].width / 2)
                ))
                break;
            case 'p':
                power_up.push(new PowerUp(
                    j * boundaries[0].width + (boundaries[0].width / 2),
                    i * boundaries[0].width + (boundaries[0].width / 2)
                ))
                break;
            default: break;
        }
    })
})