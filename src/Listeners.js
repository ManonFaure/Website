 import * as THREE from 'three'
//====================================== Listeners
/*function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.updateProjectionMatrix();
};*/
				
function onMouseMove(event) {

    console.log(" mouseX : " +  mouseX )
    let mouseX = new THREE.Vector2(); 
    let mouseY = new THREE.Vector2(); 
    let camera = new THREE.Camera; 
    let mouseZ = new THREE.Vector2();
    let scene = new THREE.Scene(); 
   
	mouseX = event.clientX - window.innerWidth / 2;
	mouseY = event.clientY - window.innerHeight / 2;
	camera.position.x += (mouseX - camera.position.x) * 0.00005;
	camera.position.y += (mouseY - camera.position.y) * 0.00005;
    camera.position.z += (mouseZ - camera.position.z) * 0.00005; 

	//set up camera position
	//camera.lookAt(scene.position);
};

export default onMouseMove