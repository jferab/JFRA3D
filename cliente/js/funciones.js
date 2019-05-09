function reescalaVentana() {
    escenario.ancho = $("#contenedorJuego").width();
    escenario.alto = $("#contenedorJuego").height();

}

function validarPosicion(pos) {
    var cant = 300
    if (pos < -cant) {
        pos = -cant
    }
    else if (pos > cant) {
        pos = cant
    }

    return pos;
}

function validarPosicionY(pos) {
    var cant = 150
    if (pos < 100) {
        pos = 100
    }
    else if (pos > cant) {
        pos = cant
    }

    return pos;
}
function agregarLineas(x,z){
  var largo = 500
  var grueso = 1;
  var geometry = new THREE.CubeGeometry(grueso, largo, grueso);
  var material = new THREE.MeshBasicMaterial({
      color: 0xffff00
  });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, 0, z)
  return mesh;

}
//RAUL
function cargarTierra(posX, posY, posZ, largo, ancho, altura, color) {

    var objetoTemp = new Tierra();
    objetoTemp.posX = posX;
    objetoTemp.posY = posY;
    objetoTemp.posZ = posZ;

    objetoTemp.setGeo(largo, ancho, altura);
    objetoTemp.setMat(color);
    objetoTemp.setMesh();
    objetoTemp.colocar();
    objetoTemp.existir();
    objetoTemp.name = "Bloque_" + idBloque;
    switch(color.toString(16))
    {
        case "ffffff":
            objetoTemp.colorActual = "Blanco";
            break;
        case "0":
            objetoTemp.colorActual = "Negro";
            break;
    }
    objetoTemp.pintado = false;
    idBloque++;

    //scene.add(objetoTemp);    //terreno.push(objetoTemp);
}

function crearJugadores(msg){
	//console.log("llllllloloolo");
	var longitud = msg.data.split("|");
	idMio=longitud[0];
	//var longitud2 ="";
	var veraz=true;
	for(let r=0;r<longitud.length;r++){
		//console.log(idsJugadores.length);
		for(let t =0;t<idsJugadores.length;t++){
			//console.log(idsJugadores.length+"v");
			if(idsJugadores[t]!=longitud[r].split(",")[0]){
				veraz=true;
			}else{
				veraz=false;
				//console.log("hola aqui toy1");
				t=idsJugadores.length+200;
			}
		}
		if(veraz==true){
			//console.log(longitud[r].split(",")[0].length);
			if(longitud[r].split(",")[0].length>2&&idMio!=longitud[r].split(",")[0]){
				idsJugadores.push(longitud[r].split(",")[0]);
				//console.log(idsJugadores.length);
				Jugadores[idsJugadores.length-1]=new personajeDavid();
				Jugadores[idsJugadores.length-1].cargarModelo2();
			}
			
		}
	}
	actualizarPosicion(longitud); 
	
	
	
}

function actualizarPosicion(longitud2){
	
	
	for(let t =0;t<personajes.length;t++){
		if(t!=0){
			for(let p=0;p<longitud2.length;p++){
				if(idsJugadores[t]==longitud2[p].split(",")[0]){
					personajes[t].position.z = longitud2[p].split(",")[2];				
					personajes[t].position.x = longitud2[p].split(",")[1];
					personajes[t].rotation.y = longitud2[p].split(",")[3];
				}
			}
			
		}
	}
	
	sacarJugadores(longitud2); 
	
	
	
	
}


function sacarJugadores(longitud2){
	
	
	for(let t =0;t<personajes.length;t++){
		var existe = true;
		if(t!=0){
			for(let p=0;p<longitud2.length;p++){
				if(idsJugadores[t]==longitud2[p].split(",")[0]){
					existe = true;
					p=11111110;
				}else{
					existe = false;
				}
			}
			if(existe == false){
				idsJugadores.splice(t, 1);
				mixers.splice(t, 1);
				actiones.splice(t, 1);
				scene.remove(personajes[t]);
				personajes.splice(t, 1);
				t=111111111;
			}
			
		}
	}
	
	
	colorJugador(longitud2);
	
	
	
}

function colorJugador(longitud2){
//var cont0=0;

	
	if(setColorUnaVez==true){
		for(let c=0;c<longitud2.length;c++){
			if(idMio!=longitud2[c].split(",")[0]){
				if(Color==longitud2[c].split(",")[4]){
					Color=coloreando[contLocal];
					
					contLocal++;
					colorJugador(longitud2);
					setColorUnaVez=true;
				}else{
					setColorUnaVez=false;
				}
			}
		}
	}
	
	for(let m=0;m<scene.children.length;m++){
		if(scene.children[m].name=="base")
		{
			for(let p=0;p<longitud2.length;p++){
				//if(scene.children[m].position.x==140&&scene.children[m].position.z==0){
				if(longitud2[p].split(",")[1]>scene.children[m].position.x&&longitud2[p].split(",")[1]<=scene.children[m].position.x+20
				&&longitud2[p].split(",")[2]>scene.children[m].position.z&&longitud2[p].split(",")[2]<=scene.children[m].position.z+20
				&&idMio!=longitud2[p].split(",")[0]){
					//console.log(scene.children[m].material.color.setHex(coloreando[1]));
					//cont0++;
					scene.children[m].material.color.setHex(longitud2[p].split(",")[4])
				}
			}
			
		}
	}
	//console.log(cont0);


}













//RAUL FIN
