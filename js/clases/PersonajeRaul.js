function PersonajeRaul() {
    this.geo;
    this.mat;
    this.mesh;
    this.mixer2;
    this.objeto = new THREE.Object3D();
    this.nombre
    this.position = {
        x: 300,
        y: 0,
        z: 0
    }
    this.rotation = {
        x: 0,
        y: 0,
        z: 0
    }


    //Metodos
    // model
    this.cargarObjeto = function (nombre) {
        var loader = new THREE.FBXLoader();
        loader.load('fbx/Walking2.fbx', function (object) {

            mixer2 = new THREE.AnimationMixer(object);

            var action = mixer2.clipAction(object.animations[0]);
            action.play();
            object.add(topCamera);
            personaje2 = object;
            object.traverse(function (child) {

                if (child.isMesh) {

                    child.castShadow = true;
                    child.receiveShadow = true;

                }

            });

            this.objeto = object;
            console.log(this.objeto);
            scene.add(this.objeto);
            this.movimiento();

        });


    }

    this.movimiento = function () {
        angulo2 += girando2 / 10;
        posz2 += Math.cos(angulo2) * avance2 * 3
        posx2 += Math.sin(angulo2) * avance2 * 3

        //camera2.position.x = posx2
        //camera2.position.z = posz2 - 500;//400



        personaje2.position.z = posz2
        personaje2.position.x = posx2
        personaje2.rotation.y = angulo2;


        this.objeto.position.z = posz2
        this.objeto.position.x = posx2
        this.objeto.rotation.y = angulo2;
        /*try{
        	//this.Animar();
        }
        catch(error){
        	//console.log("no carga")
        }
        */
    }

/*
    this.Animar = function () {
        mixer2 = new THREE.AnimationMixer(personaje);
        var action = mixer2.clipAction(clips[clip]);
        action.play();
        personaje2.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }*/



}
