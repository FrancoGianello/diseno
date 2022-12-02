let http = new XMLHttpRequest();
// http.open('get', './json/tablaTipos.json', true);
http.open('get', './json/type-chart.json', true);
http.send();
let padre = document.getElementById("tbody");
let tr = document.createElement("tr");
let primeraFila = true;
http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let datos = JSON.parse(this.responseText);
        //Sacar la cantidad de tipos que hay más uno (para la casilla de la izquierda con el tipo   )
        let longitud = Object.keys(datos).length+1;
        for (var keyX in datos) {
            if (datos.hasOwnProperty(keyX)) {
                //pintar primera fila con los nombres de los tipos
                if(primeraFila){
                    primeraFila=false;
                    tr.innerHTML += '<td id="'+obtenerId(longitud)+'" ></td>';
                    for (var keyY in datos) {
                        if (datos.hasOwnProperty(keyY)) {
                            tr.innerHTML += '<td id="'+obtenerId(longitud)+'" class="'+keyY+'">'+keyY+"</td>";
                        }
                    }
                    padre.appendChild(tr);
                }
                //resetear fila
                tr = document.createElement("tr");
                tr.innerHTML += '<td id="'+obtenerId(longitud)+'" class="'+ keyX+'">'+ keyX+'</td>';
                //generar efectividades
                for (var keyY in datos) {
                    if (datos.hasOwnProperty(keyY)) {
                        efectividad="efectividad"+datos[keyX][keyY];
                        if(datos[keyX][keyY]==0.5) efectividad="efectividadMedio"
                        id =obtenerId(longitud);
                        parametrosId = id.split(" ");
                        tr.innerHTML += '<td style="width: calc(100% / '+longitud+')" onmouseover="destacarTipos('+parametrosId[0]+','+parametrosId[1]+')" onmouseout="resetearDestacado('+parametrosId[0]+','+parametrosId[1]+')" class="'+efectividad+'" id="'+id+'">x'+ datos[keyX][keyY]+'</td>';
                    }
                }
                padre.appendChild(tr);
            }
        }
        
        
    }
}
let contX =0;
let contY=0;
function obtenerId(longitud){
    if(contX==longitud){
        contY++;
        contX=0;
    }
    let id=contY +" "+contX;
    contX++;
    return id;
}

function destacarTipos(ejeY, ejeX){
    //recorrer en la posicion X, tantas como Y se han especificado
    for (let i = 0; i < ejeY; i++) {
        casillaX = document.getElementById(i+" "+ejeX);
        casillaX.classList.add("destacado");  
    }
    //recorrer en la posicion Y, tantas como X se han especificado
    for (let i = 0; i < ejeX; i++) { 
    casillaY = document.getElementById(ejeY+" "+i);
    casillaY.classList.add("destacado");
    }
    //destacar la casilla seleccionada
    casilla = document.getElementById(ejeY+" "+ejeX);
    casilla.classList.add("destacado");
}
function resetearDestacado(ejeY, ejeX){
    //recorrer en la posicion X, tantas como Y se han especificado
    for (let i = 0; i < ejeY; i++) {
        casillaX = document.getElementById(i+" "+ejeX);
        casillaX.classList.remove("destacado");
    }
    //recorrer en la posicion Y, tantas como X se han especificado
    for (let i = 0; i < ejeX; i++) { 
        casillaY = document.getElementById(ejeY+" "+i);   
        casillaY.classList.remove("destacado");
    }
    //destacar la casilla seleccionada
    casilla = document.getElementById(ejeY+" "+ejeX);
    casilla.classList.remove("destacado");
}