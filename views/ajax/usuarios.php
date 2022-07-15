<?php


require_once "../../controllers/usuarios.php";
require_once "../../models/usuarios.php";


class Ajax
{

    public $identificador;
    public $primer_nombre;
    public $foto;


    public function gestorUsuariosAjax()
    {

        $datos = array(
            "identificador" => $this->identificador,
            "primer_nombre" => $this->primer_nombre,
            "foto" => $this->foto
        );

        $respuesta = GestorUsuarioController::guardarUsuariosController($datos);

        echo $respuesta;
    }
    #PASO DE NIVELES 
    #:................................................
    public $nivel;
    public $puntaje;
    public $numeroNivel;
    public $id;
    public function gestorPuntajesAjax()
    {
        $datos = array(
            "nivel" => $this->nivel,
            "puntaje" => $this->puntaje,
            "numeroNivel" => $this->numeroNivel,
            "id" => $this->id
        );
        $respuesta= GestorUsuarioController::guardarPuntajesController($datos);
        echo $respuesta;
    }
};

if (isset($_POST["identificador"])) {
    $a = new Ajax();
    $a->identificador = $_POST["identificador"];
    $a->primer_nombre = $_POST["primer_nombre"];
    $a->foto = $_POST["foto"];
    $a->gestorUsuariosAjax();
}

if (isset($_POST["nivel"])) {
    $b = new Ajax();
    $b->nivel = $_POST["nivel"];
    $b->puntaje = $_POST["puntaje"];
    $b->numeroNivel = $_POST["numeroNivel"];
    $b->id = $_POST["id"];

    $b->gestorPuntajesAjax();
}
