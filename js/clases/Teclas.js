function Teclas() {
    $(document).keydown(function (event) {
        // Tecla W        
        if ((event.which == 87 || event.which == 119)) {
            eje = 0;
            Mover();
            if (clip == 0) {
                clip = 1;
                Animar();
            }
        }
        // Tecla S        
        if ((event.which == 83 || event.which == 115)) {
            eje = 2;
            Mover();
            if (clip == 0) {
                clip = 1;
                Animar();
            }
        }
        // Tecla A        
        if ((event.which == 65 || event.which == 97)) {
            eje = 3;
            Mover();
            if (clip == 0) {
                clip = 1;
                Animar();
            }
        }
        // Tecla D        
        if ((event.which == 68 || event.which == 100)) {
            eje = 1;
            Mover();
            if (clip == 0) {
                clip = 1;
                Animar();
            }
        }
		
		
		        //I
        if ((event.which == 73|| event.which == 105 )) {
            //console.log("hola")
			avance2 = 1;
        }
		
		        //J
        if ((event.which == 74|| event.which == 106 )) {
            //console.log("hola")
			girando2 = 1;
        }
		
		        //K
        if ((event.which == 75|| event.which == 107 )) {
            //console.log("hola")
			avance2 = -1;
        }
		
		        //L
        if ((event.which == 76|| event.which == 108 )) {
            //console.log("hola")
			girando2 = -1;
        }
		
		
		
    });

    $(document).keyup(function (event) {
        // Tecla W
        if ((event.which == 87 || event.which == 119) && clip == 1) {
            clip = 0;
            Animar();
        }
    });

    $(document).keyup(function (event) {
        // Tecla S
        if ((event.which == 83 || event.which == 115) && clip == 1) {
            clip = 0;
            Animar();
        }
    });

    $(document).keyup(function (event) {
        // Tecla A
        if ((event.which == 65 || event.which == 97) && clip == 1) {
            clip = 0;
            Animar();
        }
    });

    $(document).keyup(function (event) {
        // Tecla D
        if ((event.which == 68 || event.which == 100) && clip == 1) {
            clip = 0;
            Animar();
        }
		
		
		   //I
        if ((event.which == 73|| event.which == 105 )) {
            //console.log("hola")
			avance2 = 0;
        }
		
		        //J
        if ((event.which == 74|| event.which == 106 )) {
            //console.log("hola")
			girando2 = 0;
        }
		
		        //K
        if ((event.which == 75|| event.which == 107 )) {
            //console.log("hola")
			avance2 = 0;
        }
		
		        //L
        if ((event.which == 76|| event.which == 108 )) {
            //console.log("hola")
			girando2 = 0;
        }
		
    });
}
