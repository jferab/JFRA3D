
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

		var tmpX = 0;
		var tmpY = 0;
		var tmpZ = 0;


	//Metodos
	this.setGeo = function (ancho, largo, altura){

				tmpX = ancho;
				tmpY = altura;
				tmpZ = largo;
		//console.log("test2")
		//this.geo = new THREE.BoxBufferGeometry( ancho, largo, altura );// PRIMER PRUEBA

		// SEGUNDA
		//this.geo = new THREE.BoxBufferGeometry( ancho, altura, largo );
		this.geo = new THREE.BoxBufferGeometry( 1,1,1 );
		this.geo.computeFaceNormals();
	}

	this.setMat = function (color){
		//this.mat = new THREE.MeshPhongMaterial( {
		//this.mat = new THREE.MeshLambertMaterial( {
		this.mat = new THREE.MeshBasicMaterial( {
			color:color
			//,emissive:color
					} );
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

		this.mesh.scale.set(tmpX,tmpY,tmpZ)
	}

	this.existir = function (){
		//
		//console.log("hola");
		this.mesh.name = "Piso " + idBloque;
		this.mesh.name = "Piso " + this.posX +"a"+ this.posY +"a"+ this.posZ;
		console.log(this.mesh.name);

		scene.add( this.mesh );
		terreno.push( this.mesh );
	}
}
