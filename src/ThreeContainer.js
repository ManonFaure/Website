import React, { Component } from 'react'
import * as THREE from 'three'
import soleil from './img/soleil.jpg'
import photosphere from './img/photosphere.jpg'
import mercure from './img/mercurymap.jpg'
import mercurebump from './img/mercurybump.jpg'
import venus from './img/venusmap.jpg'
import venusbump from './img/venusbump.jpg'
import terre from './img/earthmap1k.jpg'
import terrebump from './img/earthbump1k.jpg'
import terrespec from './img/earthspec1k.jpg'
import nuage from './img/earthcloudmap.jpg'
import mars from './img/marsmap1k.jpg'
import marsbump from './img/marsbump1k.jpg'
import jupiter from './img/jupitermap.jpg'
import saturne from './img/saturnmap.jpg'
import uranus from './img/uranusmap.jpg'
import neptune from './img/neptunemap.jpg'
import saturnering1 from './img/saturnringcolor.jpg'
import uranusring from './img/uranusringcolour.jpg'

class Scene extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.state = { x: 0, y: 0 };
  }
  

  componentDidMount() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })


    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);

    const stars = this.makeStars()
    scene.add(stars)

    /*======================== Soleil ==========================*/
    const Soleil = this.createSun()
    const Photosphere = this.createPhotosphere()
    scene.add(Soleil)
    scene.add(Photosphere)

    /*======================== Mercure ==========================*/
    const Mercure = this.createMercury()
    scene.add(Mercure)

    /*======================== Venus ==========================*/
    const Venus = this.createVenus()
    scene.add(Venus)

    /*======================== Terre ==========================*/
    const Terre = this.createEarth()
    const Nuage = this.createCloud()
    scene.add(Terre)
    scene.add(Nuage)

    /*======================== Mars ==========================*/
    const Mars = this.createMars()
    scene.add(Mars)

    /*======================== Jupiter ==========================*/
    const Jupiter = this.createJupiter()
    scene.add(Jupiter)

    /*======================== Saturne ==========================*/
    const Saturne = this.createSaturn()
    const SaturneRing = this.createSaturnRing()
    scene.add(Saturne)
    scene.add(SaturneRing)

    /*======================== Uranus ==========================*/
    const Uranus = this.createUranus()
    const UranusRing = this.createUranusRing()
    scene.add(Uranus)
    scene.add(UranusRing)

    /*======================== Neptune ==========================*/
    const Neptune = this.createNeptune()
    scene.add(Neptune)


    camera.position.z = 2
    camera.position.z = 35

    window.addEventListener('windowresize', ()=> {
      camera.aspect = window.innerWidth / window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.updateProjectionMatrix();
    });

    document.addEventListener('mousemove', (event)=>{
    
      let mouseX = new THREE.Vector2(); 
      let mouseY = new THREE.Vector2(); 
     
      //console.log(" mouseX : " ,  mouseX )

      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
      camera.position.x += (mouseX - camera.position.x) * 0.00005;
      camera.position.y += (mouseY - camera.position.y) * 0.00005;
      camera.lookAt(scene.position);;   
    });


    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.Soleil = Soleil
    this.Mercure = Mercure
    this.Venus = Venus
    this.Terre = Terre
    this.Nuage = Nuage
    this.Mars = Mars
    this.Jupiter = Jupiter
    this.Saturne = Saturne
    this.SaturneRing = SaturneRing
    this.Uranus = Uranus
    this.UranusRing = UranusRing
    this.Neptune = Neptune

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  /*======================== Espace ==========================*/
  makeStars() {
    var starMaterial = new THREE.PointsMaterial({
      size: 2,
      blending: THREE.AdditiveBlending
    });
  
    var stargeometry = new THREE.SphereGeometry(500, 80, 80, 0, Math.PI * 2);
    for (let i = 0, len = stargeometry.vertices.length; i < len; i++){
      let vertex = stargeometry.vertices[i];
      vertex.x += Math.random() * -200;
      vertex.y += Math.random() * -200;
      vertex.z += Math.random() * -100;
    }
  
    stargeometry.verticesNeedUpdate = true;
    stargeometry.normalsNeedUpdate = true;
    stargeometry.computeFaceNormals(); 
  
    return new THREE.Points(stargeometry, starMaterial);
  }

  /*======================== Soleil ==========================*/

  createSun() {
    const textureSoleil = new THREE.TextureLoader().load( soleil );

    const SoleilGeometry = new THREE.SphereGeometry(6.95508, 32, 32)
    const SoleilMaterial = new THREE.MeshPhongMaterial({
      map: textureSoleil,
      bumpMap: textureSoleil,
      bumpScale: 0.05, })
    const Soleil = new THREE.Mesh(SoleilGeometry, SoleilMaterial)

    return Soleil
  }

  createPhotosphere() {
    const texturePhotosphere = new THREE.TextureLoader().load( photosphere )
    const PhotosphereGeometry = new THREE.SphereGeometry(7.25508, 32, 32)
    const PhotosphereMaterial = new THREE.MeshPhongMaterial({
      map: texturePhotosphere,
      bumpMap : texturePhotosphere,
      bumpScale: 0.05,
      transparent: true,
      opacity : 0.5 })
    const Photosphere = new THREE.Mesh(PhotosphereGeometry, PhotosphereMaterial)

    return Photosphere
  }

  /*======================== Mercure ==========================*/
  createMercury() {
    const textureMercure = new THREE.TextureLoader().load( mercure )
    const textureMercureBump = new THREE.TextureLoader().load( mercurebump )

    const MercureGeometry = new THREE.SphereGeometry(0.244, 32, 322)
    const MercureMaterial = new THREE.MeshPhongMaterial({
      map: textureMercure,
      bumpMap: textureMercureBump,
      bumpScale: 0.005 })
    const Mercure = new THREE.Mesh(MercureGeometry, MercureMaterial)

    Mercure.position.x = 10;
    Mercure.position.y = 0;
    Mercure.position.z = 5;

    /*Mercure.rotateOnAxis( 10, 0 );*/

    return Mercure
  }

  /*moveMercure(){
    const mercure = createMercure
    if (this.Mercure.position.x < 10){
      console.log("Mercure pos : ", this.Mercure.position.x)
      this.Mercure.position.x =+ 5
    }
  }*/
  /*moveMercure() {
    //var scrollY = window.scrollY
    var scrollY =  window.pageYOffset
    console.log("scrollY : "+ scrollY)
      if ( scrollY > 100 ) {
        console.log( " le scroll est superieur a 300 ! ")
        new TWEEN.Tween(mercure.position ).to( {x:10 , y:0 , z:5 } , 2500 ).easing( TWEEN.Easing.Quadratic.InOut).start();
        /*document.removeEventListener("wheel", moveMercure);*/
     /* }
  }*/

  /*======================== Venus ==========================*/
  createVenus() {
    const textureVenus = new THREE.TextureLoader().load( venus )
    const textureVenusBump = new THREE.TextureLoader().load( venusbump )

    const VenusGeometry = new THREE.SphereGeometry(0.6052, 32, 32)
    const VenusMaterial = new THREE.MeshPhongMaterial({
      map: textureVenus,
      bumpMap: textureVenusBump,
      bumpScale: 0.005, })
    const Venus = new THREE.Mesh(VenusGeometry, VenusMaterial)

    Venus.position.x = 1;
    Venus.position.y = 0;
    Venus.position.z = 11;

    return Venus
  }

  /*======================== Terre ==========================*/
  createEarth() {
    const textureTerre = new THREE.TextureLoader().load( terre )
    const textureTerreBump = new THREE.TextureLoader().load( terrebump )
    const textureTerreSpec = new THREE.TextureLoader().load( terrespec )

    const TerreGeometry = new THREE.SphereGeometry(0.6371, 32, 32)
    const TerreMaterial = new THREE.MeshPhongMaterial({
      map: textureTerre,
      bumpMap: textureTerreBump,
      bumpScale	: 0.05,
      specularMap	: textureTerreSpec,
      specular: new THREE.Color('grey'), })
    const Terre = new THREE.Mesh(TerreGeometry, TerreMaterial)

    Terre.position.x = 12;
    Terre.position.y = 0;
    Terre.position.z = 10;

    return Terre
  }

  createCloud() {
    const textureNuage = new THREE.TextureLoader().load( nuage )

    const NuageGeometry = new THREE.SphereGeometry(0.6571, 32, 32)
    const NuageMaterial = new THREE.MeshPhongMaterial({
      map: textureNuage,
      side		: THREE.DoubleSide,
      transparent	: true,
      opacity		: 0.8 })
    const Nuage = new THREE.Mesh(NuageGeometry, NuageMaterial)

    Nuage.position.x = 12;
    Nuage.position.y = 0;
    Nuage.position.z = 10;

    return Nuage
  }
  
  /*======================== Mars ==========================*/
  createMars() {
    const textureMars = new THREE.TextureLoader().load( mars )
    const textureMarsBump = new THREE.TextureLoader().load( marsbump )

    const MarsGeometry = new THREE.SphereGeometry(0.339, 32, 32)
    const MarsMaterial = new THREE.MeshPhongMaterial({
      map: textureMars,
      bumpMap	: textureMarsBump,
		  bumpScale: 0.05 })
    const Mars = new THREE.Mesh(MarsGeometry, MarsMaterial)

    Mars.position.x = -13;
    Mars.position.y = 0;
    Mars.position.z = 11;

    return Mars
  }  

  /*======================== Jupiter ==========================*/
  createJupiter() {
    const textureJupiter = new THREE.TextureLoader().load( jupiter )

    const JupiterGeometry = new THREE.SphereGeometry(1.69911, 32, 32)
    const JupiterMaterial = new THREE.MeshPhongMaterial({
      map: textureJupiter,
      bumpMap	: textureJupiter,
      bumpScale: 0.02 })
    const Jupiter = new THREE.Mesh(JupiterGeometry, JupiterMaterial)

    Jupiter.position.x = 22;
    Jupiter.position.y = 0;
    Jupiter.position.z = 1;

    return Jupiter
  }

  /*======================== Saturne ==========================*/
  createSaturn() {
    const textureSaturne = new THREE.TextureLoader().load( saturne )

    const SaturneGeometry = new THREE.SphereGeometry(1.3232, 32, 32)
    const SaturneMaterial = new THREE.MeshPhongMaterial({map: textureSaturne,
      bumpMap	: textureSaturne,
      bumpScale: 0.05 })
    const Saturne = new THREE.Mesh(SaturneGeometry, SaturneMaterial)

    Saturne.position.x = -18;//-20
    Saturne.position.y = 0;
    Saturne.position.z = 15;

    return Saturne
  }
  
  createSaturnRing() {
    const textureSaturneRing = new THREE.TextureLoader().load( saturnering1 )
    const SaturneRingGeometry = new THREE.RingGeometry(1.2*1.5, 2*1, 16*2, 5, 0, 3.14*2);
    const SaturneRingMaterial = new THREE.MeshBasicMaterial( { 
      map: textureSaturneRing,
      side		: THREE.DoubleSide,
      transparent	: true,
      opacity		: 0.8 } );
    const SaturneRing = new THREE.Mesh( SaturneRingGeometry, SaturneRingMaterial );
    SaturneRing.lookAt(new THREE.Vector3(0.5,-4,1))

    SaturneRing.position.x = -18;
    SaturneRing.position.y = 0;
    SaturneRing.position.z = 15;

    return SaturneRing
  }

  /*======================== Uranus ==========================*/
  createUranus() {
    const textureUranus = new THREE.TextureLoader().load( uranus )

    const UranusGeometry = new THREE.SphereGeometry(1.25362, 32, 32)
    const UranusMaterial = new THREE.MeshPhongMaterial({map: textureUranus,
      bumpMap	: textureUranus,
      bumpScale: 0.05 })
    const Uranus = new THREE.Mesh(UranusGeometry, UranusMaterial)

    Uranus.position.x = -29;//-30
    Uranus.position.y = 0;
    Uranus.position.z = 10;

    return Uranus
  }

  createUranusRing() {
    const textureUranusRing = new THREE.TextureLoader().load( uranusring )

    const UranusRingGeometry = new THREE.RingGeometry(1.2*1.7, 2*1, 16*2, 5, 0, 3.14*2);
    const UranusRingMaterial = new THREE.MeshBasicMaterial( { 
      map: textureUranusRing,
      side		: THREE.DoubleSide,
      transparent	: true,
      opacity		: 0.8 } );
    const UranusRing = new THREE.Mesh( UranusRingGeometry, UranusRingMaterial );
    UranusRing.lookAt(new THREE.Vector3(5,-4,1))

    UranusRing.position.x = -29;
    UranusRing.position.y = 0;
    UranusRing.position.z = 10;

    return UranusRing
  }

  /*======================== Neptune ==========================*/
  createNeptune() { 
    const textureNeptune = new THREE.TextureLoader().load( neptune )

    const NeptuneGeometry = new THREE.SphereGeometry(1.24622, 32, 32)
    const NeptuneMaterial = new THREE.MeshPhongMaterial({map: textureNeptune,
      bumpMap	: textureNeptune,
      bumpScale: 0.05 })
    const Neptune = new THREE.Mesh(NeptuneGeometry, NeptuneMaterial)

    Neptune.position.x = 35;
    Neptune.position.y = 0;
    Neptune.position.z = 0;

    return Neptune
  }


  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  
 
  animate() {
    this.Soleil.rotation.x -= 0.001
    this.Soleil.rotation.y -= 0.001
    this.Mercure.rotation.x += 0.0015
    this.Mercure.rotation.y += 0.0015
    this.Venus.rotation.x -= 0.002
    this.Venus.rotation.y += 0.002
    this.Terre.rotation.x += 0.001
    this.Terre.rotation.y += 0.001
    this.Nuage.rotation.x += 0.002
    this.Nuage.rotation.y += 0.002
    this.Mars.rotation.x -= 0.0015
    this.Mars.rotation.y -= 0.0015
    this.Jupiter.rotation.x += 0.002
    this.Jupiter.rotation.y -= 0.002
    this.Saturne.rotation.x -= 0.001
    this.Saturne.rotation.y -= 0.001
    this.SaturneRing.rotation.x -= 0.001
    this.SaturneRing.rotation.y -= 0.001
    this.Uranus.rotation.x += 0.001
    this.Uranus.rotation.y += 0.001
    this.UranusRing.rotation.x += 0.001
    this.UranusRing.rotation.y += 0.001
    this.Neptune.rotation.x -= 0.0015
    this.Neptune.rotation.y -= 0.0015

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene


/*https://medium.com/@jamesoreilly_36928/getting-started-with-react-three-renderer-3df3280c9fdf*/