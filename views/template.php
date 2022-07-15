<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pac-Man</title>
    <link rel="icon" href="views/img/intro/pacMan.png">
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="views/css/estilo.css" media>
</head>

<body>

    <!--
 PANTALLA VETICAL
-->
    <div id="vertical"></div>


    <div id="marco"></div>
    <div id="contenedor">

        <?php


        if (isset($_GET["validar"])) {


            switch ($_GET["validar"]) {
                case "inicio":
                    include "modules/inicio.php";
                    break;
                case "salir":
                    include "modules/salir.php";
                    break;
                default:
                    
                    include "modules/ingreso.php";
            }
        } else {
            include "modules/ingreso.php";
        }


        ?>

    </div>


    <!--
 CREDITOS
-->
    <footer>
        <center>
            <p>
                Juego desarrollado por Tutoriales a tu Alcance | <a href="#">www.tutoriales.com</a>
            </p>
        </center>
    </footer>
    <audio src="views/audio/pacman-waka-waka.mp3" id="comer" type="audio/mp3" muted></audio>
    <audio src="views/audio/pacman-music.mp3" id="pacman_music" type="audio/mp3" muted></audio>
    <audio src="views/audio/pacman-dies.mp3" id="muerte" type="audio/mp3" muted></audio>
    <audio src="views/audio/pacman-eating-ghost.mp3" id="eatghosts" type="audio/mp3" muted></audio>
    <audio src="views/audio/pacman-5.mp3" id="dead" type="audio/mp3" muted></audio>
    <audio src="views/audio/pacman-intermission.mp3" id="ganar" type="audio/mp3" muted></audio>
    <audio src="views/audio/monedero.mp3" id="count" type="audio/mp3" muted></audio>



    <script src="views/js/new/sonido.js"></script>
    <script src="views/js/new/header.js"></script>
    <script src="views/js/new/pac-man.js"></script>
    <script src="views/js/new/ghosts.js"></script>
    <script src="views/js/new/bolitas.js"></script>
    <script src="views/js/new/message.js"></script>
    <script src="views/js/new/bloques.js"></script>
    <script src="views/js/new/index.js"></script>

    <script src="views/js/variables_y_propiedades.js"></script>
    <script src="views/js/inicio.js"></script>

</body>

</html>