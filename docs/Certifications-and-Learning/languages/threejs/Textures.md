# Textures

LINK --> https://threejs-journey.com/lessons/11
LINK --> https://threejs-journey.com/lessons/12

const textureLoader = new THREE.TextureLoader()       <-- Takes a image and apply
const textureLoader = new THREE.CubeTextureLoader()   <-- Takes 6 images. Used with environmentMap

const texture1 = textureLoader.load("./location/to/image1.png")
const texture2 = textureLoader.load("./location/to/image2.png")
const texture3 = textureLoader.load("./location/to/image3.png")


const textureLoader = new THREE.CubeTextureLoader() 
This takes array of 6 images, like six sides of a cube. 
When this is used with material.envMap; the item will reflect the environment
