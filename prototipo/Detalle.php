<?php
    class Pokemon{
        private $id;
        private $imgRef;
        private $name;
        private $type;
        private $base;
        private $file = file_get_contents("pokedexData.json");
        const $datosPokemon = json_decode(self::$file);
        public function __construct($id){
            $this->id=$this->validar($id);
        }
        public function validar($identificador){
            $coincidencia = false;
            $i =0;
            while($i<count($datosPokemon) && !$coincidencia) {
                if($identificador==0)$coincidencia=true;
                if($identificador==$datosPokemon[$i]->id) $coincidencia=true;
                $i++;
            }
            $id="";
            if($coincidencia) $id=$identificador;
            return $id;
        }
        public function inicializarDatos(){
            $this->name =$datosPokemon[$this->id]->name->english;
            $this->type = $datosPokemon[$this->id]->type;
            $this->base = $datosPokemon[$this->id]->base;
            $this->imgRef = obtenerImgRef($this->id);
        }
        function obtenerImgRef($id){
            if($id<100) $id= "0".$id;
            if($id<10)$id= "0".$id;
            $this->imgRef=$id."";
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