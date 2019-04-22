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
    //renderer.render(scene, camera);


    //camara.obj.updateMatrixWorld();
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        ratonArriba = intersects[0].object.name;
    }
    else {
        ratonArriba = "nada"
    }
    raycaster.setFromCamera(mouse, topCamera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        ratonArriba2 = intersects[0].object.name;
    }
    else {
        //ratonArriba2 = "nada"
    }

    if (personaje != null) {
        Jugador2.rayoColision();
    }
    /*
    raycaster.set(Jugador2.position, direction.subVectors(objDestin.position, objOrigin.position).normalize());
        intersects = raycaster.intersectObjects(objects);
        for (let i = 0; i < intersects.length; i++) {
            intersects[i].object.material.color.set(Math.random() * 0xffffff);
        }
        renderer.render(scene, camera);
    */




    //console.log(ratonArriba + "," + ratonArriba2);
    //renderer.render(scene, camera);
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
    /*
        //RAUL
        if (personaje2 != null) {
            Jugador1.movimiento();
        }
        //RAUL FIN*/
    var idJugador = 0;
    var msg = idJugador + "," + posX + "," + posZ + "|";

    try {
        // Le envia la longaniza al socket
        socket.send(msg);
    }
    catch (ex) {
        console.log("error")
        log(ex);
    }


    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }

    if (avance2 == 1 || avance2 == -1) {
        if (mixer2) {
            mixer2.update(delta);
        }
    }
    renderer.render(scene, camera);
}


/*


//init
 // Defino un rayo que tiene un vector (o varios rayos)
			    Mbolo.rayos = [
			        new THREE.Vector3(-1,0,0),
			        new THREE.Vector3(1,0,0),
			        new THREE.Vector3(0,1,0),
			        new THREE.Vector3(0,-1,0)
			     ]
			    // A partir del rayo defino un raycaster
			    Mbolo.proyectarayo = new THREE.Raycaster();
			    // Para cada uno de los rayos, compruebo si hay colision
			    for(let i = 0;i<Mbolo.rayos.length;i++){
			        // Dentro del raycaster proyecto un rayo desde mi posicion y en la direccion del rayo
			    	Mbolo.proyectarayo.set(Mbolo.position, Mbolo.rayos[i]);
			    	// Defino una colision
			    	collisions = Mbolo.proyectarayo.intersectObjects(objetos);
			    	// Si las colisiones son mayores que 0, en ese caso, exito
			    	if (collisions.length > 0){
			    		//console.log("colisionando")
			    		
			    		
			    	}
			    }
                
                
                
                //animate
                
                
                for(var i = 0;i<Mbolo.rayos.length;i++){
			    	Mbolo.proyectarayo.set(Mbolo.position, Mbolo.rayos[i]);
			    	collisions = Mbolo.proyectarayo.intersectObjects(objetos);
			    	if (collisions.length > 0 ){
			    		if(collisions[0].distance < 4){
				    		//console.log("colision")
				    		//console.log(collisions)	
				    		
				    		if(collisions[0].object.name!=""){
							
							var g =collisions[0].object.name;
							switch (g) {
				 				case "Basket": Mbasket.position.y =-500; Mbasket.name="";db=false; break;
				 				case "Futbol": Mfutbol.position.y =-500; Mfutbol.name="";df=false; break;
				 				case "Golf": Mgolf.position.y =-500; Mgolf.name="";dg=false; break;
				 				case "Volley": Mvolley.position.y =-500; Mvolley.name="";dv=false; break;
				 				case "Tenis": Mtenis.position.y =-500; Mtenis.name="";dt=false;break;
				 				default: break;
				 				}
						    puntos-=5;
						    //console.log(puntos);
							}
			    		}
			    		
			    	}
			    }



*/
