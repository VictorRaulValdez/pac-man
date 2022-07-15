

//////////////////
const person = new pacMan(75, 75, 0, 0);
let replaceScore = 0;


////almacenando los datos
let saveShock = [];
let count = 0;
let animatioId;
let bandera = true;
let game_over = false;
function loop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animatioId = requestAnimationFrame(loop);


    power_up.forEach((powerup, i) => {
        powerup.draw();

        if (Math.hypot(powerup.x - person.x, powerup.y - person.y) < powerup.radius + person.radius) {
            power_up.splice(i, 1);
            replaceScore += 5;
            score.innerHTML = replaceScore;
            bandera = false;
            ghosts.forEach(ghost => {
                ghost.colorState = true;
            });

        }


    })
    if (!bandera) {
        pac_man_music.play();
        ghosts.forEach((ghost, i) => {
            if (Math.hypot(ghost.x - person.x, ghost.y - person.y) < ghost.radius + person.radius) {
                ghosts.splice(i, 1);
                replaceScore += 15;
                score.innerHTML = replaceScore;
                eat_ghosts.play();
            }
        })
    }
    if (!bandera && animatioId % 500 === 0) {
        ghosts.forEach(ghost => {
            ghost.colorState = false;
        });
        bandera = true;
    }



    let circle_x1 = person.x - person.radius;
    let circle_y1 = person.y - person.radius;
    let circle_x2 = person.x + person.radius;
    let circle_y2 = person.y + person.radius;

    boundaries.forEach((figure) => {
        figure.draw();
        function shock() {
            let blox_x1 = figure.x;
            let blox_y1 = figure.y;
            let blox_x2 = figure.x + figure.width;
            let blox_y2 = figure.y + figure.height;

            if (circle_x1 >= blox_x2) return false;
            if (circle_x2 <= blox_x1) return false;
            if (circle_y1 >= blox_y2) return false;
            if (circle_y2 <= blox_y1) return false;

            if (circle_x1 < blox_x2) { if (person.xv > 0) person.xv -= 0.5; person.xv += person.xv * 2; datos_movement.left = false; }
            if (circle_x2 > blox_x1) { if (person.xv > 0) person.xv -= 0.5; person.xv -= person.xv * 2; datos_movement.right = false; }
            if (circle_y1 < blox_y2) { if (person.xy > 0) person.xv -= 0.5; person.yv += person.yv * 2; datos_movement.top = false; }
            if (circle_y2 > blox_y1) { if (person.xy > 0) person.xv -= 0.5; person.yv -= person.yv * 2; datos_movement.bottom = false; }
            return true;
        }
        if (shock()) {

            person.movement();
            person.draw();
            person.address = "stop";
            person.xv = 0;
            person.yv = 0;
        }

    })

    /////BOLITAS IMPRIMIR
    pellets.forEach((pellet, i) => {
        pellet.draw();
        if (Math.hypot(pellet.x - person.x, pellet.y - person.y) < pellet.radius + person.radius) {
            pellets.splice(i, 1);
            replaceScore += 1;
            score.innerHTML = replaceScore;
            waka_waka.play();
        }
    })

    /////FASTAMAS IMPRIMIR
    ghosts.forEach(ghost => {

        if (Math.hypot(ghost.x - person.x, ghost.y - person.y) < ghost.radius + person.radius) {
            game_over = true;
        }


        let circle_x1 = ghost.x - ghost.radius;
        let circle_y1 = ghost.y - ghost.radius;
        let circle_x2 = ghost.x + ghost.radius;
        let circle_y2 = ghost.y + ghost.radius;
        let shockBoundary = [];
        boundaries.forEach(boundary => {
            function chocar(top, bottom, left, right) {
                let blox_x1 = boundary.x;
                let blox_y1 = boundary.y;
                let blox_x2 = boundary.x + boundary.width;
                let blox_y2 = boundary.y + boundary.height;

                if (circle_x1 - left >= blox_x2) return false;
                if (circle_x2 + right <= blox_x1) return false;
                if (circle_y1 - top >= blox_y2) return false;
                if (circle_y2 + bottom <= blox_y1) return false;

                return true;
            }

            function chocartwo() {
                let blox_x1 = boundary.x;
                let blox_y1 = boundary.y;
                let blox_x2 = boundary.x + boundary.width;
                let blox_y2 = boundary.y + boundary.height;

                if (circle_x1 >= blox_x2) return false;
                if (circle_x2 <= blox_x1) return false;
                if (circle_y1 >= blox_y2) return false;
                if (circle_y2 <= blox_y1) return false;

                if (circle_x1 < blox_x2) { ghost.xv += ghost.xv * 2; }
                if (circle_x2 > blox_x1) { ghost.xv -= ghost.xv * 2; }
                if (circle_y1 < blox_y2) { ghost.yv += ghost.yv * 2; }
                if (circle_y2 > blox_y1) { ghost.yv -= ghost.yv * 2; }

                return true;
            }



            if (ghost.x % 25 == 0) {

                if (chocar(6, 0, 0, 0)) {
                    if (!shockBoundary.includes("top")) {
                        shockBoundary.push("top");
                    }
                }
                if (chocar(0, 6, 0, 0)) {
                    if (!shockBoundary.includes("bottom")) {
                        shockBoundary.push("bottom");
                    }
                }
                if (chocar(0, 0, 0, 6)) {
                    if (!shockBoundary.includes("right")) {
                        shockBoundary.push("right");
                    }
                }
                if (chocar(0, 0, 6, 0)) {
                    if (!shockBoundary.includes("left")) {
                        shockBoundary.push("left");
                    }

                }
            }
            if (chocartwo()) {

                ghost.x += ghost.xv;
                ghost.y += ghost.yv;


                if (count == 1) {
                    count = 0;
                }
                else {
                    count = 1;
                    if (ghost.previusDirection == "horizontal") {
                        ghost.previusDirection = "vertical"
                        ghost.address = "right"
                    }
                    else {
                        ghost.previusDirection = "horizontal"
                        ghost.address = "top"
                    }
                }
            }




        })



        if (count == 0) {
            if ((saveShock !== shockBoundary || saveShock.length !== shockBoundary.length) && shockBoundary.length > 0) {
                count = 0;
                saveShock = shockBoundary;
                let sides = ["right", "left", "top", "bottom"];
                let memory = [];
                sides.forEach(row => {
                    if (!saveShock.includes(row)) {
                        if (row != ghost.address) {
                            memory.push(row);
                        }
                    }
                })
                let x = Math.floor(Math.random() * memory.length);
                if (!ghost.previusDirection == "horizontal" && memory[x] == "right" || memory[x] == "left") {
                    ghost.address = memory[x];
                    ghost.previusDirection = "vertical";
                }
                else if (!ghost.previusDirection == "vertical" && memory[x] == "top" || memory[x] == "bottom") {
                    ghost.address = memory[x];
                    ghost.previusDirection = "horizontal";
                }

            }
        }

        delete shockBoundary;

        ghost.draw();
        ghost.movement();

    })
    person.draw();
    person.movement();

    if (game_over) {


        game_over = false;
        datos.numeros_de_vidas--;
        vida.removeChild(vida.lastElementChild);

        person.x = 75;
        person.y = 75;
        pac_man_dies.play();
        if (vida.lastElementChild == null) {
            drawGameEnd("Game Over!");
            pac_man_dead.play();
            cancelAnimationFrame(animatioId);
            setTimeout(function () {
                window.location.reload();
            }, 3000)
        }


    }
    else if (replaceScore >= 130) {
        drawGameEnd("You Win!");
        cancelAnimationFrame(animatioId);
        pac_man_ganar.play();

        setTimeout(function () {
            var xhr = new XMLHttpRequest();
            var nivel = "ok";
            var puntaje = replaceScore+(datos.numeros_de_vidas*10);
            var numeroNivel = datos.nivel;
            var id = datos.id;
            var url = "views/ajax/usuarios.php";
            pac_man_ganar.pause();

            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.send("nivel=" + nivel + "& puntaje=" + puntaje + "& numeroNivel=" + numeroNivel + "& id=" + id);

            xhr.onreadystatechange = function () {
                if ((xhr.readyState == 4) && (xhr.status == 200)) {
                    console.log("xhr.responseText", xhr.responseText);

                    
                    let padre_vidas = document.querySelector("#vidas_img");
                    for (let i = 0; i < 3 - datos.numeros_de_vidas; i++) {
                        padre_vidas.removeChild(padre_vidas.lastElementChild);
                    }

                    document.querySelector("#finalMonedas span").innerHTML = replaceScore;
                    document.querySelector("#finalVidas span").innerHTML = datos.numeros_de_vidas * 10;
                    document.querySelector("#final").style.display = "block";
                    let increment = document.querySelector("#puntajeFinal");
                    let interval = setInterval(function () {

                        if (datos.puntos_final <= replaceScore + (datos.numeros_de_vidas * 10)) {
                            datos.puntos_final++;
                            increment.innerHTML = datos.puntos_final;
                            count_point.play();
                        }
                        else {
                            count_point.pause();
                            clearInterval(interval);
                        }

                    }, 30);

                    if (xhr.responseText == "ok") {
                        setTimeout(function () {
                            window.location = "inicio";
                        }, 5000)
                    }
                }
            }

        }, 5000);
    }

}







