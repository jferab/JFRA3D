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
