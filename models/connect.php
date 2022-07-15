<?php

class Conexion
{

    static public function conectar()
    {
        $link = new PDO("mysql:host=localhost;dbname=blackninja", "root", "");

        return $link;
    }
};

/*
$db=new Conexion();

if($db->conectar()){
    echo "verdad";
}
else{
    echo "false";
}
 */
