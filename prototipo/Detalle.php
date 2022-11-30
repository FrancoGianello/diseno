<?php
    class Detalle{
        private $id;
        private $imgRef;
        private $name;
        private $type;
        private $base;
        
        public function __construct($id){
            $this->id=$this->validar($id);
        }
        public function validar($identificador){
            $file = file_get_contents("./json/pokedexData.json");
            $datosPokemon = json_decode($file);
            $coincidencia = false;
            if($identificador==0)$coincidencia=true;
            foreach ($datosPokemon as $key => $value) {
                if($identificador==$datosPokemon[$key]->id) $coincidencia=true;
            }
            $id="";
            if($coincidencia) $id=$identificador;
            return $id;
        }
        public function inicializarDatos(){
            $file = file_get_contents("./json/pokedexData.json");
            $datosPokemon = json_decode($file);
            //restar uno porque el index en el json empieza en 0
            $this->name =$datosPokemon[$this->id-1]->name->english;
            $this->type = $datosPokemon[$this->id-1]->type;
            $this->base = $datosPokemon[$this->id-1]->base;
            $this->imgRef = $this->obtenerImgRef($this->id);
        }
        function obtenerImgRef($id){
            if($id<100) $id= "0".$id;
            if($id<10)$id= "0".$id;
            return $id."";
            
        }
        public function pintarDatos(){

        }
        public function getId(){return $this->id;}
        public function getImgRef(){return $this->imgRef;}
        public function getName(){return $this->name;}
        public function getType(){return $this->type;}
        public function getBase(){return $this->base;}
    }

?>