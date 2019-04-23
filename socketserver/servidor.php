<?php
require_once('websockets.php');
class echoServer extends WebSocketServer {
    public $usuario;

    public function process ($user, $message) {
        // Creamos la columna utc para guardarnos la fecha
        $this->usuario[$user->id]['utc'] = date('U');
        $explotado = explode("|", $message);
        // Creamos la columna mensaje que contiene el mensaje completo a reenviar
        $this->usuario[$user->id]['idJugador'] = $user->id;
        $this->usuario[$user->id]['posX'] = explode(",",$explotado[0])[1];                      // Posicion X
        $this->usuario[$user->id]['posY'] = explode(",",$explotado[0])[2];                      // Posicion Y

         //$longaniza = "";//cambio Raul 23/04/2019
		$longaniza = $user->id."|";
        foreach ($this->usuario as &$valor) {
            if($valor['utc'] > date('U') - 15){
               $longaniza .= $valor['idJugador'].",".$valor['posX'].",".$valor['posY']."|";
            }
        }
		$this->send($user, $longaniza);
    }

    protected function connected ($user) {

    }
    protected function closed ($user) {

    }
}

$echo = new echoServer("0.0.0.0","8082");

try {
    $echo->run();
}
catch (Exception $e) {
    $echo->stdout($e->getMessage());
}
