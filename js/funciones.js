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
//RAUL FIN


function crearJugadores(msg){
	var longitud = msg.data.split("|");
	var longitud2 ="";
	var veraz=true;
	for(let r=0;r<longitud.length;r++){
		for(let t =0;t<idsJugadores.length;t++){
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
			if(longitud[r].split(",")[0].length>2){
				idsJugadores.push(longitud[r].split(",")[0]);
				//console.log(idsJugadores.length);
				Jugadores[idsJugadores.length-1]=new personajeDavid();
				Jugadores[idsJugadores.length-1].cargarModelo2();
			}
			
		}
	}
	
	
	
	
	
	
	
}






















