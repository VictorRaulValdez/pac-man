
/*================================
  METODOS DEL OBJETO INICIO
=================================*/

var inicio = {
     /*================================
       METODOS INGRESO A LA APLICACIÓN
      =================================*/
     iniciar: function () {
          var identificador = "33333333";
          var primer_nombre = "Julio";
          var foto = "views/img/intro/julio.png";
          //////////uso de ajax


          ///aciones asincrona entre javascript y XML 
          var xhr = new XMLHttpRequest();
          var url = "views/ajax/usuarios.php";
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//bajo que forma vaoms enviar los datos
          xhr.send("identificador=" + identificador + "& primer_nombre=" + primer_nombre + "& foto=" + foto);
          xhr.onreadystatechange = function () {
               if ((xhr.readyState == 4) && (xhr.status == 200)) {
                    if (xhr.responseText == "ok") {
                         window.location = "inicio";
                    }
               }
          }

     },
     /*================================
     ELEGIR NIVEL
    =================================*/
     elegirNivel: function (event) {

          datos.nivel = event.getAttribute("nivel");
          datos.id = event.getAttribute("id");
          inicio.inicio_niveles(datos.nivel);
          console.log(datos.id)
          console.log("datos.id")

     },

     /*================================
     INICIO DE NIVELES
    =================================*/
     inicio_niveles: function (nivel) {

          document.querySelector("#inicio").parentNode.removeChild(document.querySelector("#inicio"));
          document.querySelector("#carga").style.display = "none";
          document.querySelector("#lienzo").style.display = "block";
          document.querySelector("#tablero").style.display = "block";

          pac_man_music.muted = false;
          waka_waka.muted = false;
          pac_man_dies.muted = false;
          eat_ghosts.muted = false;
          pac_man_dead.muted = false;
          pac_man_ganar.muted = false;
          count_point.muted = false;

          person.teclado();
          loop();

     },
     salirDelJuego: function () {
          window.location.reload();
     },
     /*================================
       BAJAR VOLUMEN
      =================================*/
     bajarVolumen: function (event) {
          let volumen = event.getAttribute("volumen");
          let button_volume = document.querySelectorAll("#sonido ul li");
          let music = document.querySelectorAll("audio");

          if (volumen == 0) {
               button_volume.forEach(row => {
                    row.style.opacity = .5;
               })
          }
          else if (volumen == 0.3) {
               button_volume[0].style.opacity =1;
               button_volume[1].style.opacity = 0.5;
               button_volume[2].style.opacity = 0.5;
          }
          else {
               button_volume.forEach(row => {
                    row.style.opacity = 1;
               })
          }
          music.forEach(row => {
               row.volume = volumen;
          })
     }
}