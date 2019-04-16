var clips = [];
var personaje = null;
var action = null;
var mixer = null;
var clip = 0;
var eje = null;

function CargarModelo() {
    var loader = new THREE.FBXLoader();
    loader.load('fbx/Idle.fbx', function (object) {
        personaje = object;
        personaje.name = "Personaje";
        clips[0] = object.animations[0];
        clips[0].name = "Idle"
        personaje.position.set(0, 0, 0);
        personaje.rotation.set(0, 0, 0);
        scene.add(object);
        Animar();
    });

    var loader2 = new THREE.FBXLoader();
    loader2.load('fbx/Walking.fbx', function (object) {
        clips[1] = object.animations[0];
        clips[1].name = "Walk"
    });
}

function Animar() {
    mixer = new THREE.AnimationMixer(personaje);
    action = mixer.clipAction(clips[clip]);
    action.play();
    personaje.traverse(function (child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
}

function Mover() {
    var direccion = null;
    switch (eje) {
        case 0:
            direccion = 1;
            personaje.rotation.set(0, 0, 0);
            personaje.position.set(personaje.position.x, 0, personaje.position.z + direccion);
            break;
        case 1:
            direccion = -1;
            personaje.rotation.set(0, ((3 * Math.PI) * 0.5), 0);
            personaje.position.set(personaje.position.x + direccion, 0, personaje.position.z);
            break;
        case 2:
            direccion = -1;
            personaje.rotation.set(0, Math.PI, 0);
            personaje.position.set(personaje.position.x, 0, personaje.position.z + direccion);
            break;
        case 3:
            direccion = 1;
            personaje.rotation.set(0, (Math.PI * 0.5), 0);
            personaje.position.set(personaje.position.x + direccion, 0, personaje.position.z);
            break;
    }
}
