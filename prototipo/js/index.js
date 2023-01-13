let padre="";
padre = document.getElementById("mainIndex");
const FINALGEN1 =151;
const FINALGEN2 = 251;
const FINALGEN3 = 386;
const FINALGEN4 = 493;
const FINALGEN5 = 649;
const FINALGEN6 = 721;
const FINALGEN7 = 809;


fetch("../json/pokedexData.json")
.then(function(reponse){
    return reponse.json();
})
.then(function(reponse){
    for (let value of reponse) {
        if(value.id<=FINALGEN7 && value.id>FINALGEN6){
        let pokemonDatos = new Pokemon(value.id, value.name.english, value.type);
        padre.innerHTML += pokemonDatos.pintarObjeto();
        }
        // else break;
    }
})
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