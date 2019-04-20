// Hago una conexión a un puerto TCP de un servidor que esta a la escucha
var direccion = "wss://semana09-dkmilo.c9users.io:8082/echobot";
var socket = new WebSocket(direccion);

// Mensaje cuando se produce la conexion exitosa
socket.onopen = function(msg) 
{
    console.log("El canal de comunicación se ha abierto");
};

// Que voy a hacer cuando el servidor me envie un mensaje
socket.onmessage = function(msg) 
{
    //console.log(msg.data)
};

// Mensaje que te saco cuando el servidor se cierra
socket.onclose = function(msg) 
{
    console.log("cerrado")
};
