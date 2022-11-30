let http = new XMLHttpRequest();
// http.open('get', './json/tablaTipos.json', true);
http.open('get', './json/type-chart.json', true);
http.send();
let padre = document.getElementById("tbody");
let primeraFila = true;
let td = document.createElement("td");
let tr = document.createElement("tr");
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
                    td = crearTd(longitud);
                    td.innerHTML="";
                    tr.appendChild(td)
                    for (var keyY in datos) {
                        if (datos.hasOwnProperty(keyY)) {
                            td =  crearTd(longitud);
                            td.className = "tipo "+keyY;
                            td.innerHTML = keyY;
                            tr.appendChild(td)
                            tabla.appendChild(tr);
                        }
                    }
                }
                //resetear fila
                tr = document.createElement("tr");
                //generar primer td a la izquierda del todo
                td = crearTd(longitud);
                td.innerHTML=keyX;
                td.className= "tipo "+keyX;
                tr.appendChild(td);
                //generar efectividades
                for (var keyY in datos) {
                    if (datos.hasOwnProperty(keyY)) {
                        td = crearTd(longitud);
                        tr.appendChild(td);
                        td.className = "efectividad"+datos[keyX][keyY];
                        if(datos[keyX][keyY]==0.5) td.className="efectividadMedio"
                        td.innerHTML = "x"+datos[keyX][keyY];
                    }
                }
                tabla.appendChild(tr);
            }
        }
        
        
    }
}
let cont =0;
function crearTd(longitud){
    let td =document.createElement("td");
    td.style.width = 'calc(100% / '+longitud+')' ;
    td.id=cont;
    cont++;
    return td;
}