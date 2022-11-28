let http = new XMLHttpRequest();
let padre="";
try {
    padre = document.getElementById("mainIndex");   
}catch (error) {}  
http.open('get', './json/pokedexData.json', true);
http.send();
if (padre!=undefined && padre!=null){
    http.onload = function(){
        if(this.readyState == 4 && this.status==200){
            let datos = JSON.parse(this.responseText);
            for (let value of datos) {
            pokemonDatos = new Pokemon(value.id, value.name.english, value.type);
            padre.innerHTML += pokemonDatos.pintarObjeto();
            }
        }
    }
}
function buscarDatos() {
    var input, filtro, dato;
    input = document.getElementById("barra-busqueda");
    filtro = input.value.toUpperCase();
    dato = padre.getElementsByTagName("a");
    for (i = 0; i < dato.length; i++) {
        //guardar todos los datos del div del link, siendo estos 3 elementos de tipo p
        let contenedor = dato[i].getElementsByTagName("div")[0];
        let numeroID = contenedor.getElementsByTagName("p")[0].innerText;
        let nombreBuscar = contenedor.getElementsByTagName("p")[1].innerText;
        let tipoBuscar = contenedor.getElementsByTagName("p")[2].innerText;
        //comprobar que existe una coincidencia con cualquiera de los anteriores
        if (tipoBuscar.toUpperCase().indexOf(filtro) > -1 || nombreBuscar.toUpperCase().indexOf(filtro) > -1  || numeroID.toUpperCase().indexOf(filtro) > -1 ) 
        {
            dato[i].style.display = "";
        } else {
            dato[i].style.display = "none";
        }
    }
}
function subirArriba() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};