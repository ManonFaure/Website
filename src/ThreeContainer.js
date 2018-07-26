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
    const Soleil = this.createPlanet(soleil, soleil, 6.95508, 0, 0, 0)
    const Photosphere = this.createPhotosphere()

    scene.add(Soleil)
    scene.add(Photosphere)

    /*======================== Mercure ==========================*/
    const Mercure = this.createPlanet(mercure, mercurebump, 0.244, 100, 0, 5)//10,0,5
    scene.add(Mercure)

    /*======================== Venus ==========================*/
    const Venus = this.createPlanet(venus, venusbump, 0.6052, 100, 0, 11)//1,0,11
    scene.add(Venus)

    /*======================== Terre ==========================*/
    const Terre = this.createEarth()
    const Nuage = this.createCloud()
    scene.add(Terre)
    scene.add(Nuage)

    /*======================== Mars ==========================*/
    const Mars = this.createPlanet(mars, marsbump, 0.339, -100, 0, 11)//-13,0,11
    scene.add(Mars)

    /*======================== Jupiter ==========================*/
    const Jupiter = this.createPlanet(jupiter, jupiter, 1.69911, 100, 0, 1)//22,0,1
    scene.add(Jupiter)

    /*======================== Saturne ==========================*/
    const Saturne = this.createPlanet(saturne, saturne, 1.3232, -100, 0, 15)//-18,0,15
    const SaturneRing = this.createSaturnRing()
    scene.add(Saturne)
    scene.add(SaturneRing)

    /*======================== Uranus ==========================*/
    const Uranus = this.createPlanet(uranus, uranus, 1.25362, -100, 0, 10)//-29,0,10
    const UranusRing = this.createUranusRing()
    scene.add(Uranus)
    scene.add(UranusRing)

    /*======================== Neptune ==========================*/
    const Neptune = this.createPlanet(neptune, neptune, 1.24622, 100, 0, 0)//35,0,0
    scene.add(Neptune)

    /*==================================================*/
    camera.position.z = 2
    camera.position.z = 35

    window.addEventListener('resize', ()=> {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('mousemove', (event)=>{
    
      let mouseX = new THREE.Vector2(); 
      let mouseY = new THREE.Vector2(); 

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

  /*======================== Planète ==========================*/
  createPlanet(texture, textureBump, radius, posX, posY, posZ){
    const texturePlanete = new THREE.TextureLoader().load( texture );
    const texturePlaneteBump = new THREE.TextureLoader().load( textureBump )

    const PlaneteGeometry = new THREE.SphereGeometry(radius, 32, 32)
    const PlaneteMaterial = new THREE.MeshPhongMaterial({
      map: texturePlanete,
      bumpMap: texturePlaneteBump,
      bumpScale: 0.05, })
    const Planete = new THREE.Mesh(PlaneteGeometry, PlaneteMaterial)

    Planete.position.x = posX;
    Planete.position.y = posY;
    Planete.position.z = posZ;

    return Planete
  }

  /*======================== Soleil ==========================*/
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

    Terre.position.x = 100;//12
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

    Nuage.position.x = 100;//12
    Nuage.position.y = 0;
    Nuage.position.z = 10;

    return Nuage
  }

  /*======================== Saturne ==========================*/
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

    SaturneRing.position.x = -100;//-18
    SaturneRing.position.y = 0;
    SaturneRing.position.z = 15;

    return SaturneRing
  }

  /*======================== Uranus ==========================*/
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

    UranusRing.position.x = -100;//-29
    UranusRing.position.y = 0;
    UranusRing.position.z = 10;

    return UranusRing
  }

  //Pour les planètes qui doivent se déplacer de gauche à droite
  MovePlaneteGaD(planete, scroll, posX) {
    var scrollY =  window.pageYOffset;
    if (scrollY > scroll){
      if(planete.position.x < posX){
        planete.position.x += 2;
      }

    }
  }

  //Pour les planètes qui doivent se déplacer de droite à gauche
  MovePlaneteDaG(planete, scroll, posX) {
    var scrollY =  window.pageYOffset;
    if (scrollY > scroll){
      if(planete.position.x > posX){
        planete.position.x -= 2;
      }

    }
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

    this.MovePlaneteDaG(this.Mercure, 300, 10);
    this.MovePlaneteDaG(this.Venus, 300, 1);
    this.MovePlaneteDaG(this.Terre, 1400, 12);
    this.MovePlaneteDaG(this.Nuage, 1400, 12);
    this.MovePlaneteGaD(this.Mars, 1400, -13);
    this.MovePlaneteDaG(this.Jupiter, 2800, 22);
    this.MovePlaneteGaD(this.Saturne, 2800, -18);
    this.MovePlaneteGaD(this.SaturneRing, 2800, -18);
    this.MovePlaneteGaD(this.Uranus, 4500, -29);
    this.MovePlaneteGaD(this.UranusRing, 4500, -29);
    this.MovePlaneteDaG(this.Neptune, 4500, 35);

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