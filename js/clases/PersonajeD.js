var clips = [];
var personaje = null;
var action = null;
var mixer = null;
var clip = 0;
var eje = null;
var angulo = null;
var girando = null;
var posX = null;
var posZ = null;
var personajes = new Array();//cambio
personajes.push(0);///////////////////
var mixers = new Array();//cambio
var actiones = new Array();//cambio
mixers.push(0);////
actiones.push(0);////


function personajeDavid() {
    this.id="0";
    this.cargarModelo = function() {
        var loader = new THREE.FBXLoader();
        loader.load('fbx/Idle.fbx', function(object) {
            object.add(camera);
            personaje = object;
            personaje.name = "Jugador_2";
            clips[0] = object.animations[0];
            clips[0].name = "Idle"
            personaje.position.set(0, 0, 0);
            personaje.rotation.set(0, 0, 0);

            scene.add(object);
            this.animar();



        });

        var loader2 = new THREE.FBXLoader();
        loader2.load('fbx/Walking.fbx', function(object) {
            clips[1] = object.animations[0];
            clips[1].name = "Walk"

                        $("#contenedorCargando").hide()
                        $("#contenedorJuego").show()
                        animate();
        });
    }

    this.animar = function() {
        mixer = new THREE.AnimationMixer(personaje);
        action = mixer.clipAction(clips[clip]);
        action.play();
        personaje.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }

    this.mover = function() {
        var direccion = null;
        switch (eje) {
            case 0:
                direccion = 3;
                angulo += girando / 100;
                posX += Math.sin(angulo) * direccion * 3;
                posZ += Math.cos(angulo) * direccion * 3;
                personaje.position.set(posX, 0, posZ);
                break;
            case 1:
                angulo += girando / 100;
                posX += 0;
                posZ += 0;
                personaje.rotation.set(0, angulo, 0);
                personaje.position.set(posX, 0, posZ);
                break;
            case 2:
                direccion = -3;
                angulo += girando / 100;
                posX += Math.sin(angulo) * direccion * 3;
                posZ += Math.cos(angulo) * direccion * 3;
                personaje.position.set(posX, 0, posZ);
                break;
            case 3:
                angulo += girando / 100;
                posX += 0;
                posZ += 0;
                personaje.rotation.set(0, angulo, 0);
                personaje.position.set(posX, 0, posZ);
                break;
        }
    }

    this.rayoColision = function(){
        var inicioRayo = new THREE.Vector3(personaje.position.x, 10,  personaje.position.z);
        var destinoRayo = new THREE.Vector3(personaje.position.x, -50, personaje.position.z);
        raycasterPersonaje.set(inicioRayo,destinoRayo);
        intersectsRayoPersonaje = raycasterPersonaje.intersectObjects(terreno);
        //console.log( intersectsRayoPersonaje );
        for (let i = 0; i <  intersectsRayoPersonaje.length; i++) {
            if (intersectsRayoPersonaje[i].object.type == "Mesh") {
                intersectsRayoPersonaje[i].object.material.color.setHex(0x0000ff);
            }
            break;
        }
    }
	
	this.cargarModelo2 = function() {
		//console.log("hola aqui toy3");
        var loader3 = new THREE.FBXLoader();
		//console.log("hola aqui toy3gewg");
		
        loader3.load('fbx/Idle.fbx', function(object) {
           // console.log("hola aqui toy8765gsdghdg");
            personajes.push(object);
			//console.log( personajes[personajes.length-1]);
            personajes[personajes.length-1].name = "Jugador" + idsJugadores[personajes.length-1];
            clips[0] = object.animations[0];
            clips[0].name = "Idle"
            personajes[personajes.length-1].position.set(0, 0, 0);
            personajes[personajes.length-1].rotation.set(0, 0, 0);

            scene.add(object);
			//console.log(object);
            mixers[personajes.length-1] = new THREE.AnimationMixer(personajes[personajes.length-1]);
			actiones[personajes.length-1] = mixers[personajes.length-1].clipAction(clips[clip]);
			actiones[personajes.length-1].play();
			personajes[personajes.length-1].traverse(function(child) {
				if (child.isMesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			
			//console.log("hola aqui toy4");
			
        });

        var loader4 = new THREE.FBXLoader();
        loader4.load('fbx/Walking.fbx', function(object) {
            clips[1] = object.animations[0];
            clips[1].name = "Walk"
        });
		//console.log("hola aqui toy555");
    }
}
