// Hago una conexión a un puerto TCP de un servidor que esta a la escucha
//var direccion = "wss://semana09-dkmilo.c9users.io:8082/echobot";
var direccion = "wss://jfra2019-jorgefernandez.c9users.io:8082/echobot";
try {
    var socket = new WebSocket(direccion);

    // Mensaje cuando se produce la conexion exitosa
    socket.onopen = function(msg) {
        console.log("El canal de comunicación se ha abierto");
    };

    setTimeout(function() {}, 1000);

    // Que voy a hacer cuando el servidor me envie un mensaje
    socket.onmessage = function(msg) {
        console.log(msg.data);
        var split1 = msg.data.split("|");
        for (var i = 0; i < split1.length; i++) {
            if (split1[i] == "") {
                split1.splice(i, 1);
                cantidadJugadores = split1.length;
            }
        }
    }
}

catch (ex) {
    console.log(ex);
}
