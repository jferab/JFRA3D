function Teclas() {
    $(document).keydown(function(event) {
        // Tecla W
        if ((event.which == 87 || event.which == 119)) {
            eje = 0;
            Jugador2.mover();
            if (clip == 0) {
                clip = 1;
                Jugador2.animar();
            }
        }
        // Tecla S
        else if ((event.which == 83 || event.which == 115)) {
            eje = 2;
            Jugador2.mover();
            if (clip == 0) {
                clip = 1;
                Jugador2.animar();
            }
        }
        // Tecla A
        else  if ((event.which == 65 || event.which == 97)) {
            eje = 3;
            girando = 1;
            Jugador2.mover();
            if (clip == 0) {
                clip = 1;
                Jugador2.animar();
            }
        }
        // Tecla D
        else if ((event.which == 68 || event.which == 100)) {
            eje = 1;
            girando = -1;
            Jugador2.mover();
            if (clip == 0) {
                clip = 1;
                Jugador2.animar();
            }
        }


        //I
        if ((event.which == 38)) {
            avance2 = 1;
        }

        //J
        if ((event.which == 37)) {
            //console.log("hola")
            girando2 = 1;
        }

        //K
        if ((event.which == 40)) {
            //console.log("hola")
            avance2 = -1;
        }

        //L
        if ((event.which == 39)) {
            //console.log("hola")
            girando2 = -1;
        }
    });

    $(document).keyup(function(event) {
        // Tecla W
        if ((event.which == 87 || event.which == 119) && clip == 1) {
            clip = 0;
            Jugador2.animar();
        }

        // Tecla S
        else if ((event.which == 83 || event.which == 115) && clip == 1) {
            clip = 0;
            Jugador2.animar();
        }

        // Tecla A
        else if ((event.which == 65 || event.which == 97) && clip == 1) {
            clip = 0;
            girando = 0;
            Jugador2.animar();
        }

        // Tecla D
        else if ((event.which == 68 || event.which == 100) && clip == 1) {
            clip = 0;
            girando = 0;
            Jugador2.animar();
        }

        //I
        if ((event.which == 38)) {
            //console.log("hola")
            avance2 = 0;
        }

        //J
        if ((event.which == 37)) {
            //console.log("hola")
            girando2 = 0;
        }

        //K
        if ((event.which == 40)) {
            //console.log("hola")
            avance2 = 0;
        }

        //L
        if ((event.which == 39)) {
            //console.log("hola")
            girando2 = 0;
        }

    });
}
