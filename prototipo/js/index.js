let http = new XMLHttpRequest();
let padre = document.getElementById("pater");
http.open('get', 'pokedexData.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let datos = JSON.parse(this.responseText);
        for (let value of datos) {
            let hijo = document.createElement("div");
            let claseTipo ="unico "+value.type;
            if(value.type.length==2){
                claseTipo="doble";
            }
            hijo.className=claseTipo + " "+ value.type[0] + " "+value.type[1];
            hijo.innerHTML = '<p class="numero">'+value.id+'</p><p class="tipo">'+value.type+'</p><p class="nombre">'+value.name.english+'</p>';
            padre.appendChild(hijo);
        }
    }
}