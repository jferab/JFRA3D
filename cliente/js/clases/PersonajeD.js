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

function personajeDavid() {
    this.cargarModelo = function() {
        var loader = new THREE.FBXLoader();
        loader.load('fbx/Idle.fbx', function(object) {
            object.add(camera);
            personaje = object;
            personaje.name = "Personaje";
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
                direccion = 1;
                angulo += girando / 100;
                posX += Math.sin(angulo) * direccion * 3;
                posZ += Math.cos(angulo) * direccion * 3;
                personaje.position.set(posX, 0, posZ);
                break;
            case 1:
                angulo += girando / 100;
                posX += 0;
                posZ += 0;
                personaje.position.set(posX, 0, posZ);
                personaje.rotation.set(0, angulo, 0);
                break;
            case 2:
                direccion = -1;
                angulo += girando / 100;
                posX += Math.sin(angulo) * direccion * 3;
                posZ += Math.cos(angulo) * direccion * 3;
                personaje.position.set(posX, 0, posZ);
                break;
            case 3:
                angulo += girando / 100;
                posX += 0;
                posZ += 0;
                personaje.position.set(posX, 0, posZ);
                personaje.rotation.set(0, angulo, 0);
                break;
        }
    }
}
