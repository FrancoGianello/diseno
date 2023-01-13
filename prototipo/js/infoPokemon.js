function devolverIdGet(){
    let url = new URLSearchParams(window.location.search)
    return (url.get("id"));
}
let id = devolverIdGet();
fetch("../json/pokedexData.json")
.then(function(response){
    return response.json();
})
.then(function(response){
    //-1 para leer los datos del pokemon en el json
    let datosPokemon = response[id-1];
    pintarDatosPokemon(datosPokemon);
});


function pintarDatosPokemon(datosPokemon){
    let stats = datosPokemon.base;
    let pokemon = new Pokemon(datosPokemon.id,datosPokemon.name.english,datosPokemon.type);
    document.getElementById("nombrePokemon").innerText += " "+pokemon.name;
    document.getElementById("idPokemon").innerText += " "+pokemon.id;
    document.getElementById("tipos").innerText += " "+pokemon.obtenerTextoTipos();
    document.getElementById("imgPokemon").src = "../images/"+pokemon.imgref+".png";
    let cadena = "<h3>"
    for (const key in stats) {
        if (Object.hasOwnProperty.call(stats, key)) {
            const value = stats[key];
            cadena += key+": "+value+"<br>"
        }
    }
    cadena+="</h3>";
    document.getElementById("stats").innerHTML = cadena;
}