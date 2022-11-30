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
                        tr.innerHTML += '<td style="width: calc(100% / '+longitud+')" onhover="" class="'+efectividad+'" id="'+obtenerId(longitud)+'">x'+ datos[keyX][keyY]+'</td>';
                    }
                }
                padre.appendChild(tr);
                // tabla.appendChild(tr);
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