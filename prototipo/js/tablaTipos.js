let datos = [
    "Normal",
    "Flying", 
    "Electric",
    "Water",
    "Ice",
    "Dragon",
    "Fighting",
    "Poison",
    "Grass",
    "Ghost",
    "Fire",
    "Bug",
    "Ground",
    "Rock",
    "Psychic"
]

function pintar(){
    let tabla = document.getElementById("tabla");
    let fila = document.createElement("tr");
    let casilla = document.createElement("td");  
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if(i==0 && j==0){
                casilla.innerHTML =" ";
            }else if(i==0 && j>0){
                casilla.innerHTML = datos[j];
            }
            else if(j==0 && i>0){
                casilla.innerHTML = datos[i];
            }
            else
            casilla.innerHTML =" ";
            fila.appendChild(casilla);      
            casilla = document.createElement("td");     
        }
        tabla.appendChild(fila);
        fila = document.createElement("tr");
    }
}
pintar();