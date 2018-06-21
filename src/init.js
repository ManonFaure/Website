/*var camera, scene, renderer, controls , mars , venus ;
				var raycaster;
//====================================== Initialisation de la scène 
function init() {
	
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set(0,2,35);
	camera.lookAt(new THREE.Vector3(0,0,0));

	controls = new THREE.OrbitControls(camera);
    controls.autoRotate = false ;
    controls.autoRotateSpeed = 0.07;

    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.minPolarAngle = 0.8;
    controls.maxPolarAngle = 2.4;
    controls.dampingFactor = 0.07;
    controls.rotateSpeed = 0.07;		
      
    stars = makeStars();
    scene.add(stars);
    createSun();

	light();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth , window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	document.getElementById("divCanvas").appendChild( renderer.domElement );

	window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
    //document.addEventListener("wheel", myFunction);
	
	document.getElementsByTagName('CANVAS')[0].id = "testscrool";
    document.addEventListener("wheel", moveMercure);
    document.addEventListener("wheel", moveVenus);
    document.addEventListener("wheel", moveEarth);
    document.addEventListener("wheel", moveMars);
    document.addEventListener("wheel", moveJupiter);
    document.addEventListener("wheel", moveSaturne);
    document.addEventListener("wheel", moveUranus);
    document.addEventListener("wheel", moveNeptune);
};
				
function light() {
	var light = new THREE.AmbientLight(0x888888);
	scene.add(light);
	var light = new THREE.DirectionalLight(0xfdfcf0, 1);
	light.position.set(20,10,20);
	scene.add(light);
}*/

/*import THREE, { Vector3, } from 'three';
import autobind from 'autobind-decorator';
import * as THREE from 'three';

export default canvas => {

  const scene = buildScene();
  const renderer = buildRender(Dimensions.get('window').width, Dimensions.get('window').height);
  const camera = buildCamera(Dimensions.get('window').width, Dimensions.get('window').height);
  const sceneSubjects = createSceneSubjects(scene);

  function buildScene() { //...
  }

  function buildRender({ width, height }) { //...
  }

  function buildCamera({ width, height }) { //...
  }

  function createSceneSubjects(scene) { //...
  }

  function update() { //...
  }

  function onWindowResize() { //...
  }

  return {
    update,
    onWindowResize
  }
}*/
