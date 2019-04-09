function animate() {
  camara.obj.updateMatrixWorld();
  raycaster.setFromCamera( mouse, camara.obj );
  var intersects = raycaster.intersectObjects( scene.children );
  if ( intersects.length > 0 ) {
      ratonArriba=intersects[ 0 ].object.name;
    }
    else{
      ratonArriba="nada"
    }


  renderer.render( scene, camara.obj );
  for(var i = 0; i<5; i++){
    //console.log(arrMesh[i]);
    var velrot = 1
    var velrotdesf = velrot*.5

    arrMesh[i].rotation.y += Math.random()*velrot -velrotdesf;
    arrMesh[i].rotation.x += Math.random()*velrot -velrotdesf;
    arrMesh[i].rotation.z += Math.random()*velrot -velrotdesf;

      //console.log(arrMesh[i]);
      arrMesh2[i].rotation.y += Math.random()*1 -.5;
      arrMesh2[i].rotation.x += Math.random()*1 -.5;
      arrMesh2[i].rotation.z += Math.random()*1 -.5;

      var velpos = 20
      var velposdesf = velpos*.5

      arrMesh[i].position.y += Math.random()*velpos -velposdesf;
      arrMesh[i].position.x += Math.random()*velpos -velposdesf;
      arrMesh[i].position.z += Math.random()*velpos -velposdesf;

      arrMesh2[i].position.y += Math.random()*20 -10;
      arrMesh2[i].position.x += Math.random()*20 -10;
      arrMesh2[i].position.z += Math.random()*20 -10;
  }

	requestAnimationFrame( animate );

}
