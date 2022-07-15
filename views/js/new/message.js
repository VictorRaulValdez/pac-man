function drawGameEnd(text) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 100, canvas.width, 250);

    ctx.font = "75px comic sans";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    ctx.fillStyle = gradient;
    ctx.fillText(text, 350, canvas.height / 2);
}


function source(text) {
    ctx.fillStyle = "black";
    ctx.fillRect(100,0, 200, 40);
    let newTwxt="Source: "+text;
    ctx.font = "25px comic sans";
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    ctx.fillStyle = gradient;
    ctx.fillText(newTwxt, 100, 20);
}