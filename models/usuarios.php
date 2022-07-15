<?php

require_once "connect.php";

class GestorUsuariosModel
{

  #guardar usuarios
  static public function guardarUsuariosModel($datosModel)
  {

    $statement = Conexion::conectar()->prepare("INSERT INTO usuarios (identificador,primer_nombre,foto,nivel1)VALUES
      (:identificador,:primer_nombre,:foto,:nivel1)");
    $statement->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);
    $statement->bindParam(":primer_nombre", $datosModel["primer_nombre"], PDO::PARAM_STR);
    $statement->bindParam(":foto", $datosModel["foto"], PDO::PARAM_STR);
    $statement->bindParam(":nivel1", $datosModel["nivel1"], PDO::PARAM_STR);


    if ($statement->execute()) {
      return "ok";
    } else {
      return "Error";
    }
  }
  #Seleccionar  usuario
  static public function seleccionarUsuarios($datosModel)
  {
    $statement = conexion::conectar()->prepare("SELECT id,identificador,primer_nombre,foto,nivel1,puntaje_nivel1,nivel2,puntaje_nivel2,nivel3,puntaje_nivel3 FROM usuarios WHERE identificador=:identificador");
    $statement->bindParam(":identificador", $datosModel["identificador"], PDO::PARAM_INT);

    $statement->execute();
    return $statement->fetchObject();
    //$statement->close();
  }
  #SELECCIONAR PUNTAJES MAS ALTOS
  static public function puntajesNivelModel($puntajes)
  {
    $statement = conexion::conectar()->prepare("SELECT primer_nombre,foto,$puntajes FROM usuarios order by $puntajes desc limit 3");
    $statement->execute();
    return $statement->fetchAll();
  }
  #GUADAR PUNTAJES MODEL
  static public function guardarPuntajesModel($datosModel,$table){
    
    $numero_nivel=$datosModel["numero_nivel"];
    $puntaje_nivel=$datosModel["puntaje_nivel"];

    $statement=conexion::conectar()->prepare("UPDATE $table SET $numero_nivel=:nivel,$puntaje_nivel=:puntaje where id=:id");
    
    $statement->bindParam(":nivel",$datosModel["nivel"],PDO::PARAM_STR);
    $statement->bindParam(":puntaje",$datosModel["puntaje"],PDO::PARAM_INT);
    $statement->bindParam(":id",$datosModel["id"],PDO::PARAM_INT);

    if($statement->execute()){
      return "ok";
    }
    else{
      return "Error";
    }
    

  }
  static public function seleccionarPuntajeModel($datosModel,$table){
    $statement=conexion::conectar()->prepare("SELECT  nivel1, puntaje_nivel1, nivel2, puntaje_nivel2, nivel3, puntaje_nivel3 FROM $table WHERE id = :id");
    $statement->bindParam(":id",$datosModel["id"],PDO::PARAM_INT);
    $statement->execute();
    return $statement->fetchObject();
  }
};
