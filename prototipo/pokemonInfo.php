<?php
    //Obtener datos de la pokedex
    $datos = file_get_contents("pokedexData.json");
    $datosPokemon = json_decode($datos);
    if(isset($_GET["id"])){
        if($_GET["id"]==1){
            echo "muero no se controlar esto todavia";
            die();
        }else $identificador = $_GET["id"]-1;
        $coincidencia = false;
        foreach ($datosPokemon as $key => $value) if($identificador==$datosPokemon[$key]->id) $coincidencia=true;
        if(!$coincidencia) {
            echo "ERROR 404 data not found";
            die();
        }
    }else {
        echo "Esta página solo muestra la detalle";
        die();
    }
    function pintarInfo($identificador, $especificacion){
        echo $especificacion." ";
        print_r ($identificador->$especificacion);
    }
    function obtenerId($id){
        if($id<100) $id= "0".$id;
        if($id<10)$id= "0".$id;
        $id=$id."";
        echo($id);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/info.css">
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./images/favicon.ico" type="image/x-icon">
    <title>infoPokemon</title>
    <script src="./js/index.js" defer></script>
</head>
<body>
    <header class="navegador">
        <a href="./index.html" class="links">INICIO</a>
        <a href="./tablaTipos.html" class="links">TABLA DE TIPOS</a>
        <a href="./aboutMe.html" class="links">SOBRE MÍ</a>
    </header>
    <main class="main" id="main">
        <div id="imagen" class="imagen">
            <img src="./images/<?php obtenerId($datosPokemon[$identificador]->id)?>.png">
        </div>
        <div id="descripcionPokedex" class="descripcionPokedex">
            <?php  
                obtenerId($datosPokemon[$identificador]->id);
                echo "<br/>";   
                pintarInfo($datosPokemon[$identificador], "name"); 
            ?>
        </div>
        <div id="descripcionJuego" class="descripcionJuego">
            <?php
                 pintarInfo($datosPokemon[$identificador], "type");
                 echo "</br>";
                 pintarInfo($datosPokemon[$identificador], "base");
            ?>
        </div>
    </main>
    <footer class="piePagina">
        <div class="piePagina__iconsContenedor">
            <img class="piePagina__icons__icon" src="./images/instagram.jpg" alt="">
            <img class="piePagina__icons__icon" src="./images/twitter.png" alt="">
            <img class="piePagina__icons__icon" src="./images/github.png" alt="">
        </div>
    </footer>
</body>
</html>