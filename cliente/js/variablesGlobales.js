var escenario = new Escenario($("#contenedorJuego").width(), $("#contenedorJuego").height());
//console.log(escenario);
/*var
    //camara = new Camara(escenario.ancho,escenario.alto),

    //camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
    camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
camera.position.y = 200;
camera.position.z = -500;
camera.lookAt(new THREE.Vector3(0, 0, 0));
*/
//var topCamera = new THREE.OrthographicCamera(-110, 110, 110, -110, 10, 2000);
//topCamera.position.set(0, 450, 0);
//topCamera.up.set(0, 0, -1);

/*var topCamera = new THREE.PerspectiveCamera(50, escenario.ancho / (escenario.alto * 2), 1, 3000);
topCamera.position.set(0, 300, -900);
//topCamera.up.set(0, 1500d, 0);
topCamera.lookAt(new THREE.Vector3(0, 300, 0));
*/

var scene, renderer, control, orbit;
var container = document.getElementById('contenedorJuego');

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //Realidad virtual
			document.body.appendChild( WEBVR.createButton( renderer, { frameOfReferenceType: 'eye-level' } ) );

    renderer.vr.enabled = true;

var camera = new THREE.PerspectiveCamera(50, escenario.ancho / (escenario.alto ), 1, 3000);
camera.position.set(0, 300, -900);
//camera.up.set(0, 1500, 0);
camera.lookAt(new THREE.Vector3(0, 300, 0));

var raycasterPersonaje = new THREE.Raycaster();

//RAUL
var idBloque = 0;
var terreno = new Array();
var personaje;
var cantidadJugadores;
var objetosColision = [];
/*var camera2 = new THREE.PerspectiveCamera(45, 1, 1, 10000);
camera2.position.y = 160;
camera2.position.z = 400;
camera2.lookAt(new THREE.Vector3(0, 0, 0));
*/
var avance2 = 0
var girando2 = 0;
var angulo2 = 0;

var banRay = true;

//var light;
var personaje2 = null;
var posx2 = 300;
var posy2 = 0;
var posz2 = 0;
var mixer2;
var Jugador1 = new PersonajeRaul();
var Jugador2 = new personajeDavid();

var idsJugadores = new Array();//
var Jugadores = new Array();//
var idMio=0;//cambio
idsJugadores.push(0);
Jugadores.push(0);

var coloreando= new Array();//
coloreando.push(0);
coloreando.push("0xff0000");
coloreando.push("0x00ff00");
coloreando.push("0xffff00");
coloreando.push("0xcceeff");
coloreando.push("0xb404ae");
coloreando.push("0x240b3b");
coloreando.push("0xff00ff");
coloreando.push("0x0dd588");
//console.log(coloreando[1]);
var Color="0x0000ff";
var setColorUnaVez=true;
var contLocal=1;


//RAUL FIN
var raycasterPersonaje = new THREE.Raycaster();

var movX = -200;
/*raycasterPersonaje.far = 100;
raycasterPersonajelinePrecision  = 1;
*/
var intersectsRayoPersonaje;
var direction = new THREE.Vector3();

//click con mouse
var raycaster;
var mouse = new THREE.Vector2(),
    INTERSECTED;
var clock = new THREE.Clock();
var arrMesh = new Array();
var arrMesh2 = new Array();
var radius = 100,
    theta = 0;
raycaster = new THREE.Raycaster();

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

var ratonArriba, ratonArriba2;

function onDocumentMouseDown(event) {
    // console.log(ratonArriba);
}

document.addEventListener('mousemove', onDocumentMouseMove, false);
document.addEventListener('mousedown', onDocumentMouseDown, false);


var lista = new Array();
lista.push({
    a: "a",
    b: "あ"
});
lista.push({
    a: "i",
    b: "い"
});
lista.push({
    a: "u",
    b: "う"
});
lista.push({
    a: "e",
    b: "え"
});
lista.push({
    a: "o",
    b: "お"
});

//console.log(lista);
