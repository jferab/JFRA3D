var escenario = new Escenario($("#contenedorJuego").width(), $("#contenedorJuego").height());
console.log(escenario);
var
    //camara = new Camara(escenario.ancho,escenario.alto),

    //camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
    camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
camera.position.y = 160;
camera.position.z = 400;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var topCamera = new THREE.OrthographicCamera(-110, 110, 110, -110, 10, 2000);
topCamera.position.set(0, 450, 0);
topCamera.up.set(0, 0, -1);
topCamera.lookAt(new THREE.Vector3(0, 0, 0));

var
    scene, renderer, control, orbit;

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

function onDocumentMouseDown(event) {
    console.log(ratonArriba);


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

console.log(lista);
