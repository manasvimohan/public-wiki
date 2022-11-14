# Contents

- [Physics](#Physics)
- [Basics](#Basics)
    - [Overall Idea](#Basics#Overall Idea)
    - [Parts of physics](#Basics#Parts of physics)
- [Libraries](#Libraries)
- [Simple Usage](#Simple Usage)
- [Contact Materials](#Contact Materials)
- [Forces](#Forces)
- [CANNON and THREE combo util](#CANNON and THREE combo util)
- [Performance](#Performance)
- [Events](#Events)

# Physics

Tutorial --> https://threejs-journey.com/lessons/22
Examples --> https://schteppe.github.io/cannon.js/

Threejs does not have physics inbuilt. It just renders out stuff to a browser.

For physics we need another library. In fact the very physics in JavaScript is just a bunch of formulas in functions which can be applied to any other variables, and that acts by the formula.

Hence a physics engine is just a bunch of newton formulas, given in a manageable format.

# Basics
## Overall Idea
What is made in cannon is independent from threejs.

1. Make a world visible to cannon.
2. Add bounding boxes like shapes to the cannon world.
3. Add attributes to shape to create a body.
4. Add Cannon materials to body and define contactMaterial properties.
5. Map out locations and shapes of cannon body to the ThreeJs meshes.
6. Link threejs and cannon by update the threejs world and cannon world with the ticker.

## Parts of physics
1. World            <-- This is where all physics happen. Note: Does not know about Threejs
2. Shape            <-- Give a shape, sphere box plane etc, like a bounding box
3. Body             <-- Add mass, position etc to shape to get body
4. Material         <-- The body can have a specific material
5. Contact Material <-- Relations between materials defined, like friction etc
6. Forces           <-- Forces applied to the bodies
7. Events           <-- When body collide, sleep, wakeup etc, we can listen to them to run other functions, like playing sounds or doing something else.
8. Constraints      <-- Making multiple bodies move and act in respect to each other. Like a door hinge, or gears.

# Libraries
3d - Ammo.js     <-- Mostly used, but complex
3d - Cannon.js   <-- Easier and low learning curve
3d - Oimo.js
2d - Matter.js
2d - p2.js
2d - planck.js
2d - box2d.js

# Simple Usage
yarn add cannon or npm install --save cannon    // Install package

// The skeleton code
import CANNON from 'cannon'                     // Import Lib

const world = new CANNON.World()                // Create a world instance
world.gravity.set(0, -9.82, 0)                  // Add gravity to it x,y,z

const sphereShape = new CANNON.Sphere(0.5)      // Make a bounding shape
const sphereBody  = new CANNON.Body({           // Add physical attr to shape
    mass: 1,                                    // Like in real world mass
    position: new CANNON.Vec3(),                // The starting location
    shape: sphereShape,                         // What shape, give it
    material: mat1                              // Refer contact materials below
})
world.addBody(sphereBody)                       // Finally add body to the world

// Finally in the ticker
// sphere          <-- In threejs scene
// sphereBody      <-- In cannon world
sphere.position.x = sphereBody.position.x
sphere.position.y = sphereBody.position.y
sphere.position.z = sphereBody.position.z
    
// OR in one line
sphere.position.copy(sphereBody.position)

# Contact Materials

NOTE: You can use single material throughout too, for granular example, creating two.
NOTE2: Set a default material in the world by using world.defaultContactMaterial = contactMat

const mat1 = new CANNON.Material('concrete')
const mat2 = new CANNON.Material('plastic')

const mat1Mat2ContactMaterial = new CANNON.ContactMaterial({
        mat1,
        mat2,    // In case only single, material like mat1 used, this would also be mat1.
        {
            friction:0.1,
            restitution: 0.9,
        }

})

world.addContactMaterial(mat1Mat2ContactMaterial)

FINALLY

body1.material = mat1
body2.material = mat2

# Forces

applyForce          <-- force from a point
applyImpulse        <-- force in short duration
applyLocalForce     <-- like force, but point position is local
applyLocalImpulse   <-- like impulse, but point position is local

format is --> applyForce(fromPoint, toPoint) // Need to confirm.

Now we need 3D points, hence we use CANNON.Vec3(x,y,z)

Example:
anyBody.applyLocalForce(new CANNON.Vec3(10,0,0), new CANNON.Vec3(0,0,0))

# CANNON and THREE combo util

This section tells how both the libs should be used in sync with each other.

// A list to track cannon and threejs combo object
const objectsToUpdate = []

// Defining the object combo
const createSphere = (radius, position) => {
    // 1. ThreeJs Mesh
    // 2. Cannon Body
    // 3. Save them into a list of objects like objectToUpdate
    
    // ThreeJs Mesh
    const mesh = new THREE.Mesh(
        new THREE.SphereBufferGeometry(radius,20,20)
        new THREE.MeshStandardMaterial({
            metalness: 0.3,
            roughness: 0.4,
            envMap: envMapTexture
        })
    )
    mesh.castShadow = true
    mesh.position.copy(position)
    scene.add(mesh)
    
    // Cannon Body
    const shape = new CANNON.Sphere(radius)
    const body = new CANNON.Body({
        mass:1,
        position: new CANNON.Vec3(0,3,0),
        shape: shape,
        material: mat1
    })
    body.position.copy(position)
    body.addEventListener('collide', playSound)     // Refer the [Events](#Events) section on this page.
    world.addBody(body)
    
    // Save them into a list of objects like objectsToUpdate
    objectsToUpdate.push({
        mesh: mesh, 
        body: body
        })
}

// Creating the combo by running the combo function above
createSphere(0.5, {x: 0, y: 3, z: 0 })
createSphere(0.7, {x: 0, y: 5, z: 0 })

// Updating the ticker

const tick = () => {
    for(const object of objectsToUpdate){
        object.mesh.position.copy(object.body.position)
    }
}

// Adding dat gui controls

const gui = new dat.GUI()   // Create an instance
const debugObject = {}      // An empty array

// Define the function of the dat gui contorller
debugObject.createSphere = () => {
    createSphere(0.5, {x: ,y: ,z: })    // Our combo function is put in here
}

gui.add(debugObject,'createSphere')     // dat gui added to the screen

# Performance

Two Points:
1. Broadphase: By default, when physics is calculated, it is done for each object wrt each other object. This processing is useless since out of, say, 100 objects, only 2 are near each other, then why would you want the physics engine to calculate forces for all 100 items, which is 100! (100 factorial).
2. Sleep: When objects are not interacting, everything is stop, even then calculations are done continuously, so we need to stop calculations on idle. So we use sleep method.
3. Workers: Javascript is single thread language. So all processing done on single thread. To use multi thread in cannon, workers can be used to calculate different things on different threads etc. Detailed tutorial was not provided, explore by yourself.
   
Types of BROADPHASE available.
NaiveBroadphase     <-- Every body against every body n! This is DEFAULT in CANNON.
GridBroadphase      <-- Make imaginary cubes, quadrilles the world and then calculates body against those bodies in neighbouring cubes.
SAPBroadphase       <-- Sweep And Prune - tests bodies on arbitrary axis in multiple steps.

Using broadphase --> world.broadphase = new CANNON.SAPBroadphase(world)
Using sleep      --> world.allowSleep = true



# Events
const someSound = new Audio('./location/to/file.mp3')   // Load sound file.
const playSound = () => { someSound.play() }            // Basic function.

// Note: Multiple collisions create robotic multiple sounds, which is very bad to listen and unnatural.
// Hence we combine some techniques to control the sound on collition.

const playSound = (collision) => {                      // Advance function.
    const impactStrength = collision.contact.getImpactVelocityAlongNormal()     // Gives us the impact strength
    
    if(impactStrength > 1.5){                           // Play sound only when strength of imapact above something
        someSound.volume = Math.random()                // Randomly control volume, feels natural and soothing
        someSound.currentTime = 0                       // Reset sound to start, so multiple trr trr does not happen
        someSound.play()                                // Play the sound now
    }
}

# Removing objects using dat gui

debugObjects.reset = () => {
    for(const object in objectsToUpdate)
    {
        object.body.removeEventListener('collide', playSound)   // Remove sounds event
        world.removeBody(object.body)                           // Remove the cannon object
        scene.remove(object.mesh)                               // Remove the threejs mesh
    }
    
    objectsToUpdate.splice(0, objectsToUpdate.length)           // Update the objectsToUpdate array
}

# Constraints

HingeConstraint             <-- door hinge type
DistanceConstraint          <-- force two bodies to maintain distance between each other
LockConstraint              <-- merges two bodies as if they were one
PointToPointConstraint      <-- glues bodies to a specific point on the objects

# Ending Notes

## Cannon-es
Cannon has not been updated for years, but cannon-es is another version which is being updated.
You can use cannon-es instead as well

Install --> yarn add cannon-es@0.15.1 # Just search and confirm
Import  --> import CANNON from 'cannon-es'

## Ammojs
Written in C++
More famous maybe; but hard to use
More examples on net with threejs

## Physijs
Uses Ammojs in back, but easier to use
Here we do not have to created cannon body and threejs mesh separately. They are done combined.

Use -->
box = new Physijs.BoxMesh(
    new THREE.CubeGeometry(5,5,5)
    new THREE.MeshBasicMaterial({color: black})
)

scene.add(box)
