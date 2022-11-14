# Materials

LINK --> https://threejs-journey.com/lessons/12
const mat = new THREE.MeshBasicMaterial()
const mat = new THREE.MeshNormalMaterial()  <-- Allows reflection, refraction etc
const mat = new THREE.MeshMatcapMaterial()  <-- Use an image/ texture to map colors
const mat = new THREE.MeshDepthMaterial()   <-- White when near, black when far
const mat = new THREE.MeshLamberMaterial()  <-- Visible only when light is there, more performant
const mat = new THREE.MeshPhongMaterial()   <-- Same as Lamber, but better quality, less performant
const mat = new THREE.MeshToonMaterial()    <-- Same as Lamber, but cartoonish
const mat = new THREE.MeshStandardMaterial()  <-- Similar to Lamber, PBR (Physically based rendering principles), better at roughness and metelness.

mat.map = nameOfTexture
mat.color.set('green') OR material.color = THREE.Color('green')

mat.wireframe
mat.transparent
mat.opacity
mat.alphaMap
mat.side = THREE.DoubleSide

const mat = new THREE.MeshNormalMaterial()
mat.flatShading = true // In case of MeshNormalMaterial()

const mat = new THREE.MeshMatcapMaterial()
mat.matcap = matcapTexture


const mat = new THREE.MeshToonMaterial()

minFilter and magFilter can be used on mesh to control MeshToonMaterial
someMaterial.minFilter = THREE.NearestFilter
someMaterial.migFilter = THREE.NearestFilter

const mat = new THREE.MeshStandardMaterial()
mat.metalness = 0.65
mat.roughness = 0.45

mat.aoMap
mat.aoMapIntensity

displacementMap
displacementScale

metalnessMap
roughnessMap

normalMap
normalScale

alphaMap
