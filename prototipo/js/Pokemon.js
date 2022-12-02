class Pokemon{
    constructor(id, name, type){
        this.id=id;
        this.name=name;
        this.type=type;
        this.imgref = this.devolverImgref(this.id);
    }
    devolverImgref(id){
        if(id<100) id= "0"+id;
        if(id<10)id= "0"+id;
        return id;
    }
    pintarObjeto(){
        return '<a class="enlace" id="'+this.id+'" href="pokemonInfo.php?id='+this.id+'"><div '+ this.obtenerColores()+' class="caja"><p class="numero">'+this.imgref+'</p><img class="fotos" src="./images/'+ this.imgref+'.png"/><p class="nombre"><b>'+this.name+'</b></p><p class="tipo">'+this.obtenerTextoTipos()+'</p></div></a>';
    }
    obtenerTextoTipos(){
        let textoTipo = "";
        (this.type.length==2)?textoTipo = this.type[0]+ " "+this.type[1] : textoTipo = this.type[0];
        return textoTipo;
    }
    obtenerColores(){
        let color1 = this.devolverColor(this.type[0]);
        let estiloContenedor = 'style="background: '+ color1 +';"'
        if(this.type.length==2){
            let color2 = this.devolverColor(this.type[1]);
            estiloContenedor = 'style="background: linear-gradient(25deg, '+ color1+' 50%, '+ color2+' 50%);"'
        }
        return estiloContenedor;
    }
    devolverColor(valor){
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
            case "Dark": color="#705746"; break;
            case "Steel": color="#B7B7CE";break;
            case "Fairy":color="#D685AD";break;
            default:
                break;
        }
        return color;
    }
}