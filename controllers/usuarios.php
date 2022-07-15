<?php


class GestorUsuarioController
{

    static public function guardarUsuariosController($datos)
    {

        $respuestaInsertar = "";

        $datosController = array(
            "identificador" => $datos["identificador"],
            "primer_nombre" => $datos["primer_nombre"],
            "foto" => $datos["foto"],
            "nivel1" => "ok"
        );



        $respuestaSeleccionar = GestorUsuariosModel::seleccionarUsuarios($datosController);
        if (!$respuestaSeleccionar) {
            $respuestaInsertar  = GestorUsuariosModel::guardarUsuariosModel($datosController);
        }

        if ($respuestaSeleccionar || $respuestaInsertar == "ok") {
            $respuestaSeleccionar = GestorUsuariosModel::seleccionarUsuarios($datosController);
            session_start();
            $_SESSION["validar"] = true;
            $_SESSION["id"]=$respuestaSeleccionar->id;
            $_SESSION["primer_nombre"] = $respuestaSeleccionar->primer_nombre;
            $_SESSION["foto"] = $respuestaSeleccionar->foto;
            $_SESSION["nivel1"] = $respuestaSeleccionar->nivel1;
            $_SESSION["nivel2"] = $respuestaSeleccionar->nivel2;
            $_SESSION["nivel3"] = $respuestaSeleccionar->nivel3;
            $_SESSION["puntaje_nivel1"] = $respuestaSeleccionar->puntaje_nivel1;
            $_SESSION["puntaje_nivel2"] = $respuestaSeleccionar->puntaje_nivel2;
            $_SESSION["puntaje_nivel3"] = $respuestaSeleccionar->puntaje_nivel3;

            echo "ok";
        }
    }
    #Mejores Puntajes
    #....................................................................
    static public function puntajesNivelController($puntajes)
    {
        $respuesta = GestorUsuariosModel::puntajesNivelModel($puntajes);
        echo '<h2>MEJORES PUNTAJES</h2>';
        foreach ($respuesta as $row => $item) {
            if ($item[$puntajes] > 0) {

                echo '<ul>
                        <li>
                            <img src="' . $item["foto"] . '" alt="personImg">
                            <h3>' . $item["primer_nombre"] . '</h3>
                            <h2>' . $item[$puntajes] . '</h2>
                        </li>
                      </ul>';
            }
        }
    }
    #Guardar Puntajes
    #....................................................................

    static public function guardarPuntajesController($point)
    {
        $numeroNivel = 0;
        if ($point["numeroNivel"] == 3) {
            $numeroNivel = 3;
        } else if ($point["numeroNivel"] < 3) {
            $numeroNivel = $point["numeroNivel"] + 1;
        }


        $datosController = array(
            "nivel" => $point["nivel"],
            "puntaje" => $point["puntaje"],
            "numero_nivel" => "nivel" . $numeroNivel,
            "puntaje_nivel" => "puntaje_nivel" .$point["numeroNivel"],
            "id" => $point["id"]
        );

        $respuesta = GestorUsuariosModel::guardarPuntajesModel($datosController,"usuarios");

        if($respuesta == "ok"){
            $respuesta1 = GestorUsuariosModel::seleccionarPuntajeModel($datosController,"usuarios");
            session_start();
            $_SESSION["nivel1"] = $respuesta1->nivel1;
            $_SESSION["nivel2"] = $respuesta1->nivel2;
            $_SESSION["nivel3"] = $respuesta1->nivel3;
            $_SESSION["puntaje_nivel1"] = $respuesta1->puntaje_nivel1;
            $_SESSION["puntaje_nivel2"] = $respuesta1->puntaje_nivel2;
            $_SESSION["puntaje_nivel3"] = $respuesta1->puntaje_nivel3;

            echo "ok";
            
        }

    }
}
