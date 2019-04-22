
function Terreno (){
	//Propiedades
		this.posX = 0;
		this.posY = 0;
		this.posZ = 0;
		this.rotX = 0;
		this.rotY = 0;
		this.rotZ = 0;
		
		this.geo;
		this.mat;
		this.mesh;

		
	//Metodos
	this.setGeo = function (ancho, largo, altura){
		//console.log("test2")
		//this.geo = new THREE.BoxBufferGeometry( ancho, largo, altura );// PRIMER PRUEBA
		
		// SEGUNDA
		this.geo = new THREE.BoxBufferGeometry( ancho, altura, largo );
	}
	
	this.setMat = function (color){
		this.mat = new THREE.MeshPhongMaterial( { 
			color:color,
            emissive:color} );
	}
	
	this.setMesh = function (){
		this.mesh = new THREE.Mesh( this.geo, this.mat );
		this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
	}
	
	this.colocar = function (){
		
		//console.log("test3")
		this.mesh.position.x = this.posX;
		this.mesh.position.y = this.posY;//CAMBIO POR Z
		this.mesh.position.z = this.posZ;//CAMBIO POR Y
		
	}
	
	this.existir = function (){
		//
		//console.log("hola");
		this.mesh.name = "Piso " + idBloque;
		scene.add( this.mesh );
		terreno.push( this.mesh );
	}
}