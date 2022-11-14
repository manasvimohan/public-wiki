# Importing Models

Tutorial --> https://threejs-journey.com/lessons/23#
Online editor --> https://threejs.org/editor/

# Formats
OBJ
3DS
GLTF etc
Or make your own LOL

# GLTF
Getting popular, pretty light and includes lot of features.

## Three types
Default. Made of following three files
    .gltf   <-- JSON file with all information.
    .bin    <-- Binary file with 3d related information like normals, positions, uv coordinates etc. 
    .png    <-- Texture that wraps.
Binary      <-- Simple binary file
    .glb    <-- Easy to load and work with since only one file; but hard to alter the file.
Draco       <-- Like default, has multiple files, but much lighter as uses draco algo to compress.
Embedded    <-- One file like binary, but readable like json, but very heavy. Can be altered.

Now when gltf is loaded it has:

just console.log(loaded-model) to study the structure.

animations
asset
cameras
parser
scene
    children
        Object 1
            children
                Mesh
                Camera etc
            position
            quaternion
            rotation
            scale etc etc
        Object 2
        Object 3 ....
scenes
userData

# How to use GLTF Loader

## Default GLTF loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
const gltfLoader = new GLTFLoader()

gltfLoader.load{
    './location/of/the/file.gltf',      // Locaiton of fille
    () => {console.log('Hi')},          // Any number of functions
    () => {},                           // Any other like fail loaded etc...
    
    // Load a single mesh in the children
    (gltf) => { scene.add(gltf.scene.children[0]) },                      
    
    // Load model with many meshes in children
    (gltf) => { 
        while(gltf.scene.children.length) {
            scene.add(gltf.scene.children[0])
        }
    },                       
    
    // BEST WAY --> Load model with many meshes in children
    (gltf) => { 
        const children = [...gltf.scene.children]           // using "..." to copy a part of parent into a varibale
        for(const child of children) { scene.add(child) }   // running a for loop simple
    },
    
    // Easiest and shortest way
    (gltf) => { 
        gltf.scene.scale.set(x,y,z)     // If object too big or small, scale during import. 0-1 scale.
        scene.add(glft.scene)           // Just add the whole scene
    }
}

## Draco Loader
Logic is, since the draco is just compressed version of gltf, we need to set a decoder and then after that load the gltf model.

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./draco/')   // Folder is in > ./node_modules/three/examples/js/libs/draco

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

rest is same as default.

## Handeling scale and Animation

### Scale
(gltf) => { 
        gltf.scene.scale.set(x,y,z)     // If object too big or small, scale during import. 0-1 scale.
        scene.add(glft.scene)           // Just add the whole scene
    }
    
### Animation

let mixer = null; // Set this outside the loader, globally

(gltf) => {
        mixer = new THREE.AnimationMixer(gltf.scene)        //create threejs mixer
        const action = mixer.clipAction(gltf.animation[0])  // Load the first animation
        
        action.play()                   // Play the animation
        
        gltf.scene.scale.set(x,y,z)     // If object too big or small, scale during import. 0-1 scale.
        scene.add(glft.scene)           // Just add the whole scene
    }


finally down in the code at 

const tick = () => 
{
    if(mixer !== null) { mixer.update(deltaTime) }      // Read more here.
}
