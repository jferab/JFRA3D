function animate() {
    var SCREEN_W, SCREEN_H;
    SCREEN_W = window.innerWidth;
    SCREEN_H = window.innerHeight;

    var left, bottom, width, height;

    left = 1;
    bottom = 1;
    width = 0.5 * SCREEN_W - 2;
    height = SCREEN_H - 2;
    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    renderer.setScissorTest(true);
    topCamera.aspect = width / height;
    topCamera.updateProjectionMatrix();
    renderer.render(scene, topCamera);

    left = 0.5 * SCREEN_W + 1;
    bottom = 1;
    width = 0.5 * SCREEN_W - 2;
    height = SCREEN_H - 2;
    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    renderer.setScissorTest(true); // clip out "viewport"
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);


    //camara.obj.updateMatrixWorld();
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        ratonArriba = intersects[0].object.name;
    } else {
        ratonArriba = "nada"
    }
    raycaster.setFromCamera(mouse, topCamera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        ratonArriba2 = intersects[0].object.name;
    } else {
        ratonArriba2 = "nada"
    }
    console.log(ratonArriba+","+ratonArriba2);
    renderer.render(scene, camera);
    for (var i = 0; i < 5; i++) {
        //console.log(arrMesh[i]);
        var velrot = .5
        var velrotdesf = velrot * .5

        arrMesh[i].rotation.y += Math.random() * velrot - velrotdesf;
        arrMesh[i].rotation.x += Math.random() * velrot - velrotdesf;
        arrMesh[i].rotation.z += Math.random() * velrot - velrotdesf;

        //console.log(arrMesh[i]);
        arrMesh2[i].rotation.y += Math.random() * velrot - velrotdesf;
        arrMesh2[i].rotation.x += Math.random() * velrot - velrotdesf;
        arrMesh2[i].rotation.z += Math.random() * velrot - velrotdesf;

        var velpos = 10
        var velposdesf = velpos * .5

        arrMesh[i].position.y += Math.random() * velpos - velposdesf;
        arrMesh[i].position.x += Math.random() * velpos - velposdesf;
        arrMesh[i].position.z += Math.random() * velpos - velposdesf;

        arrMesh2[i].position.y += Math.random() * velpos - velposdesf;
        arrMesh2[i].position.x += Math.random() * velpos - velposdesf;
        arrMesh2[i].position.z += Math.random() * velpos - velposdesf;

        arrMesh2[i].position.x = validarPosicion(arrMesh2[i].position.x);
        arrMesh2[i].position.y = validarPosicionY(arrMesh2[i].position.y);
        arrMesh2[i].position.z = validarPosicion(arrMesh2[i].position.z);
        arrMesh[i].position.x = validarPosicion(arrMesh[i].position.x);
        arrMesh[i].position.y = validarPosicionY(arrMesh[i].position.y);
        arrMesh[i].position.z = validarPosicion(arrMesh[i].position.z);
    }

	//RAUL
  if(personaje2 !=null)
  {
    Jugador1.movimiento();
  }
	//RAUL FIN



    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }

  	if(avance2 == 1 || avance2 == -1)
    {
  		if ( mixer2 )
      {
        mixer2.update(delta);
      }
  	}

    renderer.render(scene, camera);

}
