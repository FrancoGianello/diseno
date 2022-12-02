<?php
    require ("./Detalle.php");
    if(isset($_GET["id"])){
        $identificador = $_GET["id"];
        $coincidencia = false;
        $detallePokemon = new Detalle($identificador);
        if($detallePokemon->getId()=="") {
            echo "ERROR 404 data not found";
            die();
        }else $detallePokemon->inicializarDatos();
    }else {
        echo "Esta página solo muestra la detalle";
        die();
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
            <img src="./images/<?php echo $detallePokemon->getImgRef(); ?>.png">
        </div>
        <div id="descripcionPokedex" class="descripcionPokedex">
            <?php  
                
                echo (count($detallePokemon->getType())==1)? "Tipo: " :  "Tipos: ";
                array_walk($detallePokemon->getType(), function($key){
                    echo $key." ";
                });
                echo "<br/>";
                echo ($detallePokemon->getName());
            ?>
        </div>
        <div id="descripcionJuego" class="descripcionJuego">
            <h1 class="tituloStats">POKEMON STATS</h1>
            <?php
                array_walk($detallePokemon->getBase(), function($key, $value){
                    echo $key.": ".$value." ";
                });
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