function init() {
  container = document.getElementById( 'contenedorJuego' );
  //document.body.appendChild( container );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );


  /*camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 3000 );

  camera.position.set( 1000, 500, 1000 );
  camera.lookAt( 0, 200, 0 );*/


  scene = new THREE.Scene();
  scene.add( new THREE.GridHelper( 1000, 10 ) );
  var light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.set( 1, 1, 1 );
  scene.add( light );


  var geometry = new THREE.CubeGeometry( 200, 200, 200 );
  var material = new THREE.MeshNormalMaterial();

  var mesh = new THREE.Mesh( geometry, material );

  mesh.name = "malla"
  scene.add( mesh );
}
