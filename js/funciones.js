function reescalaVentana() {
    escenario.ancho = $("#contenedorJuego").width();
    escenario.alto = $("#contenedorJuego").height();

}

function validarPosicion(pos) {
    var cant = 300
    if (pos < -cant) {
        pos = -cant
    } else if (pos > cant) {
        pos = cant
    }

    return pos;
}

function validarPosicionY(pos) {
    var cant = 150
    if (pos < 100) {
        pos = 100
    } else if (pos > cant*2) {
        pos = cant*2
    }

    return pos;
}

//RAUL
function cargarTierra(posX,posY,posZ,largo, ancho, altura, color){

        var objetoTemp = new Tierra();
        objetoTemp.posX = posX;
        objetoTemp.posY = posY;
        objetoTemp.posZ = posZ;

        objetoTemp.setGeo(largo, ancho, altura);
        objetoTemp.setMat(color);
        objetoTemp.setMesh();
		objetoTemp.colocar();
        objetoTemp.existir();

        terreno.push(objetoTemp);

}
//RAUL FIN
