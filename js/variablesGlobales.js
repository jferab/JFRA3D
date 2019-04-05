var
escenario = new Escenario($("#contenedorJuego").width(),$("#contenedorJuego").height());
console.log(escenario);
var
camara = new Camara(escenario.ancho,escenario.alto),
scene, renderer, control, orbit;

//click con mouse
var raycaster;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
raycaster = new THREE.Raycaster();

			function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}

      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
