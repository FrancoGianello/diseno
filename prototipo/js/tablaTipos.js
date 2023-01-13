// http.open('get', './json/tablaTipos.json', true);
let padre = document.getElementById("tbody");
let tr = document.createElement("tr");
let longitud ="";
let primeraFila = true;
fetch("../json/type-chart.json")
.then(function(datos){
    return datos.json();
})
.then(function(datos){
    //Sacar la cantidad de tipos que hay más uno (para la casilla de la izquierda con el tipo   )
    longitud = Object.keys(datos).length+1;
    for (var keyX in datos) {
        if (datos.hasOwnProperty(keyX)) {
            //pintar primera fila con los nombres de los tipos
            if(primeraFila){
                primeraFila=false;
                tr.innerHTML += generarEncabezado(datos);
                padre.appendChild(tr);
            }
            //resetear fila
            //printear 
            tr = document.createElement("tr");
            //printear encabezado izquierdo (primer td de cada row)
            tr.innerHTML += '<td id="'+obtenerId()+'" class="'+ keyX+'">'+ keyX+'</td>';
            //generar efectividades
            tr.innerHTML += anadirEfectividades(datos, keyX);
            padre.appendChild(tr);
        }
    }
    let casillaEfectividad = document.getElementsByClassName("casilla");
    anadirEventos(casillaEfectividad);
})
//sacar id unico con respecto a la longitud de los datos
//cada id corresponde a la posicion en la tabla
let contX =0;
let contY=0;
function obtenerId(){
    if(contX==longitud){
        contY++;
        contX=0;
    }
    let id=contY +" "+contX;
    contX++;
    return id;
}
function generarEncabezado(datos){
    let cadena = '<td id="'+obtenerId(longitud)+'" ></td>';
    for (var keyY in datos) {
        if (datos.hasOwnProperty(keyY)) {
            cadena += '<td id="'+obtenerId(longitud)+'" class="'+keyY+'">'+keyY+"</td>";
        }
    }
    return cadena;
}

function anadirEfectividades(datos, keyX){
    let cadena = "";
    for (var keyY in datos) {
        if (datos.hasOwnProperty(keyY)) {
            efectividad="efectividad"+datos[keyX][keyY];
            if(datos[keyX][keyY]==0.5) efectividad="efectividadMedio"
            id =obtenerId(longitud);
            parametrosId = id.split(" ");
            cadena += '<td style="width: calc(100% / '+longitud+')"  class="casilla '+efectividad+'" id="'+id+'">x'+ datos[keyX][keyY]+'</td>';
        }
    }
    return cadena;
}

function anadirEventos(casillaEfectividad){
    for (let i = 0; i < casillaEfectividad.length; i++) {   
        casillaEfectividad[i].addEventListener("mouseover", function(){
            let datos = this.id.split(" ");
            destacarResetearCasillas(datos[0], datos[1], true);
        })
        casillaEfectividad[i].addEventListener("mouseout", function(){
            let datos = this.id.split(" ");
            destacarResetearCasillas(datos[0], datos[1], false);
        })
    }
}

function destacarResetearCasillas(ejeY, ejeX, destacar){
    //destacar: boolean para contralar si destacarlas o si resetearlas
    let casilla, casillaX, casillaY ="";
    //recorrer en la posicion X, tantas como Y se han especificado
    for (let i = 0; i < ejeY; i++) {
        casillaX = document.getElementById(i+" "+ejeX);
        if(destacar)casillaX.classList.add("destacado");
        else casillaX.classList.remove("destacado");
    }
    //recorrer en la posicion Y, tantas como X se han especificado
    for (let i = 0; i < ejeX; i++) { 
        casillaY = document.getElementById(ejeY+" "+i);   
        if(destacar) casillaY.classList.add("destacado");
        else casillaY.classList.remove("destacado");
    }
    //destacar la casilla seleccionada
    casilla = document.getElementById(ejeY+" "+ejeX);
    if(destacar)casilla.classList.add("destacado");
    else casilla.classList.remove("destacado");
}
