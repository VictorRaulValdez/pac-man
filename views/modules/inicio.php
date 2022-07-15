<!-- ===============================
INiCIO
====================================-->
<?php

session_start();

if (!$_SESSION["validar"]) {
    header("location:ingreso");
    exit();
}

?>

<div id="inicio">
    <div id="cerrarSesion">
        <a id="cerrarSesion" href="salir">Cerrar Sesión</a>
    </div>
    <h2 id="saludo">¡Hola <?php echo $_SESSION["primer_nombre"] ?>
        <img src="<?php echo $_SESSION["foto"] ?>" alt="imagen_person"> bienvenid@!
    </h2>

    <!-- ===============================
     NIVEL ONE
     ====================================-->
    <div id="nivel1" class="niveles">
        <div class="puntaje"><?php echo $_SESSION["puntaje_nivel1"] ?> pts</div>
        <?php
        if ($_SESSION["nivel1"] == "ok") {
            echo ' <img src="views/img/intro/checkLevel1.svg" alt="check">';
            echo '<center><button onclick="inicio.elegirNivel(this)" nivel="1" id="' . $_SESSION["id"] . '">INGRESAR</button></center>';
        } else {
            echo '<img src="views/img/intro/blockLevel1.svg" alt="check">';
        }
        ?>

        <div class="puntajes">


            <?php
            $puntajes_nivel1 = new GestorUsuarioController();
            $puntajes_nivel1->puntajesNivelController("puntaje_nivel1");
            ?>

        </div>
    </div>

    <!-- ===============================
     NIVEL TWO
      ====================================-->
    <div id="nivel2" class="niveles">
        <div class="puntaje"><?php echo $_SESSION["puntaje_nivel2"] ?> pts</div>

        <?php
        if ($_SESSION["nivel2"] == "ok") {
            echo ' <img src="views/img/intro/checkLevel2.svg" alt="check">';
            echo '<center><button onclick="inicio.elegirNivel(this)" nivel="2" id="' . $_SESSION["id"] . '">INGRESAR</button></center>';
        } else {
            echo '<img src="views/img/intro/blockLevel2.svg" alt="check">';
        }
        ?>

        <div class="puntajes">
            <?php
            $puntajes_nivel1 = new GestorUsuarioController();
            $puntajes_nivel1->puntajesNivelController("puntaje_nivel2");
            ?>
        </div>
    </div>

    <!-- ===============================
     NIVEL THREE
      ====================================-->
    <div id="nivel3" class="niveles">
        <div class="puntaje"><?php echo $_SESSION["puntaje_nivel3"] ?> pts</div>
        <?php
        if ($_SESSION["nivel3"] == "ok") {
            echo ' <img src="views/img/intro/checkLevel3.svg" alt="check">';
            echo '<center><button onclick="inicio.elegirNivel(this)" nivel="3" id="' . $_SESSION["id"] . '">INGRESAR</button></center>';
        } else {
            echo '<img src="views/img/intro/blockLevel3.svg" alt="check">';
        }
        ?>

        <div class="puntajes">
            <?php
            $puntajes_nivel1 = new GestorUsuarioController();
            $puntajes_nivel1->puntajesNivelController("puntaje_nivel3");
            ?>
        </div>
    </div>



</div>

<!--====================================
     CANVAS
    ====================================-->

<canvas id="lienzo" width="1000px" height="500px"></canvas>

<!--====================================
     TAblero
    ====================================-->
<div id="tablero">
    <!--====================================
     Vidas
    ====================================-->
    <div id="vidas">
        <p>Vidas: </p>
        <ul>
            <li><img src="views/img/ghosts/pacMan.png" alt="img-vidas"></li>
            <li><img src="views/img/ghosts/pacMan.png" alt="img-vidas"></li>
            <li><img src="views/img/ghosts/pacMan.png" alt="img-vidas"></li>
        </ul>
    </div>
    <!--====================================
     Puntajes
    ====================================-->
    <div id="score">
        <p>Puntaje: <span>0</span></p>
        <ul>
            <li><img src="views/img/ghosts/eat.png" alt="img-vidas"></li>
        </ul>
    </div>
    <!--====================================
     Volumen
    =====================================-->
    <div id="sonido">
        <p>Volumen: </p>
        <ul>
            <li onclick="inicio.bajarVolumen(this)" volumen="0"></li>
            <li onclick="inicio.bajarVolumen(this)" volumen="0.3"></li>
            <li onclick="inicio.bajarVolumen(this)" volumen="1"></li>
        </ul>
    </div>
    <!--====================================
     Salida
    =====================================-->
    <div id="salida">
        <button onclick="inicio.salirDelJuego()">SALIR</button>
    </div>

</div>
<!--====================================
     GAMEOVER
    ====================================-->

<div id="gameover">
    <h2>GAME OVER</h2>
</div>

<!--====================================
     SALIR
    ====================================-->
<div id="final">
    <center>
        <div>
            <img src="views/img/intro/F-compartir.jpg" alt="img-compartir-fb">
        </div>
    </center>
    <h1>¡Lo LOGRASTE!<br>
        <span id="puntajeFinal">0</span> pts

    </h1>
    <ul>
        <li>
            <h3>BOCADOS</h3>
            <div id="spriteMonedaFinal"></div>
            <h4 id="finalMonedas">
                <span>0</span>pts
            </h4>
        </li>
        <li id="vidas_finales_img">
            <h3>VIDAS</h3>
            <ol id="vidas_img">
                <li><img src="views/img/ghosts/pacMan.png" alt="img-vidas"></li>
                <li><img src="views/img/ghosts/pacMan.png" alt="img-vidas"></li>
                <li><img src="views/img/ghosts/pacMan.png" alt="img-vidas"></li>
                
            </ol>

            <h4 id="finalVidas">
                <span>0</span> pts
            </h4>
        </li>

    </ul>

</div>


<!--====================================
     PRELOAD
    ====================================-->

<div id="carga">
    <div id="preload">
        <span>0%</span><br>
        <meter value="0" min="0" max="100" high="90"></meter>
    </div>
</div>