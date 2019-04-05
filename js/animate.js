function animate() {
  camara.obj.updateMatrixWorld();
  raycaster.setFromCamera( mouse, camara.obj );
  var intersects = raycaster.intersectObjects( scene.children );
  if ( intersects.length > 0 ) {
      console.log(intersects[ 0 ].object.name);
    }
    else{
      console.log("nada");
    }
  renderer.render( scene, camara.obj );


	requestAnimationFrame( animate );

}
