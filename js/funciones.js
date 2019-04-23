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
				}
			}
			
		}
	}
	
	
	
	
	
	
}
//RAUL FIN
