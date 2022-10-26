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
            link.href="#";
            let hijo = document.createElement("div");
            let claseTipo ="unico "+value.type[0] +" caja";
            let textoTipo = value.type[0];
            if(value.type.length==2){
                claseTipo="doble";
                textoTipo = value.type[0]+ " "+value.type[1];
            }
            hijo.className=claseTipo + " "+ value.type[0] + " "+value.type[1]+" caja";
            let imgRef = value.id;
            if(imgRef<100) imgRef= "0"+imgRef;
            if(imgRef<10)imgRef= "0"+imgRef;
            hijo.innerHTML = '<p class="numero">'+value.id+'</p><img class="fotos" src="./images/'+ imgRef+'.png"/><p class="nombre">'+value.name.english+'</p><p class="tipo">'+textoTipo+'</p>';
            padre.appendChild(link);
            link.appendChild(hijo);
            link = document.createElement("a");
            link.className = "enlace";
        }
    }
}