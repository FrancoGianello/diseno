let http = new XMLHttpRequest();
let padre = document.getElementById("main");
let link = document.createElement("a");
link.className = "enlace";
http.open('get', 'pokedexData.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let datos = JSON.parse(this.responseText);
        for (let value of datos) {
            link.href="pokemonInfo.html";
            let textoTipo = value.type[0];
            let color1 = devolverColor(value.type[0]);
            let estiloContenedor = 'style="background: '+ color1 +';"'
            if(value.type.length==2){
            textoTipo = value.type[0]+ " "+value.type[1];
            let color2 = devolverColor(value.type[1]);
            estiloContenedor = 'style="background: linear-gradient(90deg, '+ color1+' 40%, '+ color2+' 60%);"'
            }
            let imgRef = value.id;
            if(imgRef<100) imgRef= "0"+imgRef;
            if(imgRef<10)imgRef= "0"+imgRef;
            link.innerHTML = '<div '+ estiloContenedor+' class="caja"><p class="numero">'+imgRef+'</p><img class="fotos" src="./images/'+ imgRef+'.png"/><p class="nombre">'+value.name.english+'</p><p class="tipo">'+textoTipo+'</p></div>';
            padre.appendChild(link);
            link = document.createElement("a");
            link.className = "enlace";
        }
    }
}
function subirArriba() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
function devolverColor(valor){
    let color = "";
    switch (valor) {
        case "Water":color= "#6390F0"; break;
        case "Poison":color= "#A33EA1"; break;
        case "Normal":color= "#A8A77A"; break;
        case "Flying":color= "#A98FF3"; break;
        case "Grass":color= "#7AC74C"; break;
        case "Fire":color= "#EE8130"; break;
        case "Bug":color= "#A6B91A";break;                
        case "Electric":color= "#F7D02C"; break;
        case "Ground":color= "#E2BF65"; break;
        case "Fighting":color= "#C22E28"; break;
        case "Psychic":color= "#F95587"; break;                
        case "Rock":color= "#B6A136"; break;
        case "Dragon":color= "#6F35FC"; break;
        case "Ice":color= "#96D9D6"; break;
        case "Ghost":color= "#735797"; break;
        default:
            break;
    }
    return color;
}