function init() {
    container = document.getElementById('contenedorJuego');
    //document.body.appendChild( container );
    CargarModelo()
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);


    /*camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 3000 );

    camera.position.set( 1000, 500, 1000 );
    camera.lookAt( 0, 200, 0 );*/


    scene = new THREE.Scene();
    scene.add(new THREE.GridHelper(1000, 10));
    scene.add(new THREE.AxesHelper(100));
    //var light = new THREE.DirectionalLight( 0xffffff, 1000 );
    //var light = new THREE.PointLight( 0xff0000, 1, 1000 );

    //light.position.set( 1, 0, 0 );
    //scene.add( light );


    //var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

    /* Crear de crear esferas
    for (var i = 0; i < 5; i++) {
        var img;
        switch (i) {
            case 0:
                img = 'AJ';
                break;
            case 1:
                img = 'IJ';
                break;
            case 2:
                img = 'UJ';
                break;
            case 3:
                img = 'EJ';
                break;
            case 4:
                img = 'OJ';
                break;
            default:

        }
        var material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('imagenes/' + img + '.png')
        })
        //var geometry = new THREE.CubeGeometry( 100, 100, 100 );
        var geometry = new THREE.SphereGeometry(50, 32, 32);
        //var material = new THREE.MeshNormalMaterial();
        arrMesh[i] = new THREE.Mesh(geometry, material);
        arrMesh[i].name = img


        var img;
        switch (i) {
            case 0:
                img = 'A';
                break;
            case 1:
                img = 'I';
                break;
            case 2:
                img = 'U';
                break;
            case 3:
                img = 'E';
                break;
            case 4:
                img = 'O';
                break;
            default:

        }
        var material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('imagenes/' + img + '.png')
        })
        //var geometry = new THREE.CubeGeometry( 100, 100, 100 );
        var geometry = new THREE.SphereGeometry(50, 32, 32);
        //var material = new THREE.MeshNormalMaterial();
        arrMesh2[i] = new THREE.Mesh(geometry, material);
        arrMesh2[i].name = img

        arrMesh2[i].position.y = Math.random() * 1000 - 500;;
        arrMesh2[i].position.z = Math.random() * 1000 - 500;
        arrMesh2[i].position.x = Math.random() * 1000 - 500;
        arrMesh[i].position.y = Math.random() * 1000 - 500;;
        arrMesh[i].position.z = Math.random() * 1000 - 500;
        arrMesh[i].position.x = Math.random() * 1000 - 500;
        //console.log(arrMesh[i].position);
        //arrMesh[i].rotation.y = Math.PI;
        //scene.add( arrMesh[i] );
        //scene.add( arrMesh2[i] );


    }
    */ //Fin de crear esferas
    var largo = 500
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


    var cargarFuente = new THREE.FontLoader();

    cargarFuente.load('lib/font3d/KaoriGel_Medium.json', function (font) {
    //cargarFuente.load('lib/threejs/fonts/helvetiker_regular.typeface.json', function (font) {
        console.log("cargado");

        var materials = [
					new THREE.MeshPhongMaterial( { color: 0xff0000, flatShading: true } ), // front
					new THREE.MeshPhongMaterial( { color: 0xff0000 } ) // side
          /*new THREE.MeshBasicMaterial({
                color: 0xff0000,
                flatShading: true
            }),
          new THREE.MeshBasicMaterial({
                color: 0xff0000
            })*/
				];

        //group = new THREE.Group();
        //group.position.y = 100;
        arrMesh[0] = new THREE.Mesh(geometry, materials);
        scene.add(arrMesh[0]);

        var i = 0;
        for (var x in lista) {
            var geometry = new THREE.TextGeometry(lista[x].a, {
            //var geometry = new THREE.TextGeometry('あ', {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5
            });
            arrMesh[i] = new THREE.Mesh(geometry, materials);
            arrMesh[i].position.y += Math.random() * 1000 - 500;
            arrMesh[i].position.x += Math.random() * 1000 - 500;
            arrMesh[i].position.z += Math.random() * 1000 - 500;
            scene.add(arrMesh[i]);
            //break;
            console.log(lista[x].b);
            var geometry = new THREE.TextGeometry(lista[x].b, {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5
            });
            arrMesh2[i] = new THREE.Mesh(geometry, materials);
            arrMesh2[i].position.y += Math.random() * 1000 - 500;
            arrMesh2[i].position.x += Math.random() * 1000 - 500;
            arrMesh2[i].position.z += Math.random() * 1000 - 500;
            scene.add(arrMesh2[i]);
            i++;
        }
        var light = new THREE.PointLight(0xffffff, 100, 1000);
        light.position.set(50, 500, 50);
        scene.add(light);
		
		//RAUL
		for(let q=-500;q<501;q+=50){
			for(let w=-500;w<501;w+=50){
			cargarTierra(-q,-20,w,100,100,10,0x0b610b);	//Base 1
			}
		}
		//cargarTierra(50,-20,0,100,100,10,0x0b610b);	//Base 1
		//cargarTierra(-50,-20,0,100,100,10,0x0b610b);	//Base 1
		
		
		Jugador1.cargarObjeto();
		//scene.add(camera2);
	
		//personaje.add( light );
		
		
		//RAUL FIN

        animate();
    });
}
