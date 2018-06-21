import * as THREE from 'three'
import soleil from './img/soleil.jpg'
import photosphere from './img/photosphere.jpg'

/*======================== Soleil ==========================*/

function createSun() {
    const textureSoleil = new THREE.TextureLoader().load( soleil );

    const SoleilGeometry = new THREE.SphereGeometry(6.95508, 32, 32)
    const SoleilMaterial = new THREE.MeshPhongMaterial({
      map: textureSoleil,
      bumpMap: textureSoleil,
      bumpScale: 0.05, })
    const Soleil = new THREE.Mesh(SoleilGeometry, SoleilMaterial)

    return Soleil
}

function createPhotosphere() {
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
