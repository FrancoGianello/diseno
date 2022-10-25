let padre = document.getElementById("pater");

function crear(){
    for (let i = 0; i < 250; i++) {
        let hijo = document.createElement("div");
        padre.appendChild(hijo);
    }
}
crear();