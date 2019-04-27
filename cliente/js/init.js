function init() {
    container = document.getElementById('contenedorJuego');
    //document.body.appendChild( container );

    //Jugador1.cargarObjeto();

    Jugador2.cargarModelo();

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);


    /*camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 3000 );

    camera.position.set( 1000, 500, 1000 );
    camera.lookAt( 0, 200, 0 );*/


    scene = new THREE.Scene();
    //scene.add(new THREE.GridHelper(1000, 10));
    //scene.add(new THREE.AxesHelper(100));
    //var light = new THREE.DirectionalLight( 0xffffff, 1000 );
    //var light = new THREE.PointLight( 0xff0000, 1, 1000 );

    //light.position.set( 1, 0, 0 );
    //scene.add( light );


    /*var largo = 500
    var geometry = new THREE.CubeGeometry(10, largo, 10);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-largo, 0, largo)
    scene.add(mesh);

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-largo, 0, -largo)
    scene.add(mesh);

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(largo, 0, largo)
    scene.add(mesh);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(largo, 0, -largo)

    scene.add(mesh);
*/

    var cargarFuente = new THREE.FontLoader();

    cargarFuente.load('lib/font3d/KaoriGel_Medium.json', function(font) {

        var materials = [
            new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }), // front
            new THREE.MeshPhongMaterial({ color: 0xff0000 }) // side
        ];

        arrMesh[0] = new THREE.Mesh(geometry, materials);
        scene.add(arrMesh[0]);

        var i = 0;
        for (var x in lista) {
            var materials = [
                new THREE.MeshPhongMaterial({ color: 0xff0000, flatShading: true }), // front
                new THREE.MeshPhongMaterial({ color: 0xff0000 }) // side

            ];
            var geometry = new THREE.TextGeometry(lista[x].a, {
                font: font,
                size: 20,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 3,
                bevelSize: 3,
                bevelSegments: 5
            });
            arrMesh[i] = new THREE.Mesh(geometry, materials);
            arrMesh[i].position.y += Math.random() * 1000 - 500;
            arrMesh[i].position.x += Math.random() * 1000 - 500;
            arrMesh[i].position.z += Math.random() * 1000 - 500;
            arrMesh[i].name = "a" + i;
            //scene.add(arrMesh[i]);

            var materials = [
                new THREE.MeshPhongMaterial({ color: 0x0000ff, flatShading: true }), // front
                new THREE.MeshPhongMaterial({ color: 0x0000ff }) // side

            ];
            var geometry = new THREE.TextGeometry(lista[x].b, {
                font: font,
                size: 20,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 3,
                bevelSize: 3,
                bevelSegments: 5
            });
            arrMesh2[i] = new THREE.Mesh(geometry, materials);
            arrMesh2[i].position.y += Math.random() * 1000 - 500;
            arrMesh2[i].position.x += Math.random() * 1000 - 500;
            arrMesh2[i].position.z += Math.random() * 1000 - 500;
            arrMesh2[i].name = "b" + i;
            //scene.add(arrMesh2[i]);
            i++;
        }
        var light = new THREE.PointLight(0xffffff, 100, 1000);
        light.position.set(50, 500, 50);
        scene.add(light);

        var longCuadro = 1;
        var porCuadro=.95;
        for (let q = 0; q < 30; q += longCuadro) {
            for (let w = 0; w < 30; w += longCuadro) {
              var geo = new THREE.BoxGeometry( 20,20,20);
          		var mat = new THREE.MeshBasicMaterial( {color:0xffffff})
              var tmpmesh = new THREE.Mesh( geo, mat );
              scene.add(tmpmesh);
              tmpmesh.position.set(q*20,-10,w*20);
              //tmpmesh.scale.set(20,20,20);
              tmpmesh.name = "base"
                //cargarTierra(q, -10, w, longCuadro*porCuadro, longCuadro*porCuadro, 20, 0xffffff);
                //cargarTierra(-q, -20, w, 100, 100, 10, 0x0b610b); //Base 1
            }
        }
    });
}
