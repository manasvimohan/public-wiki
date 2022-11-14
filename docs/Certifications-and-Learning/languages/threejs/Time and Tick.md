# Time and Tick

This is needed to render out everyting wrt time.

# Concepts
FrameRate
Time

# Usage

const clock = THREE.Clock()
let oldElapsedTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime
    
    // Update Cannon World using world.step(1/60, deltaTime, 3)
    // Update ThreeJs world using renderer.render()
    // Update Controls world using controls.update()
    
    sphere.position.x = sphereBody.position.x
    sphere.position.y = sphereBody.position.y
    sphere.position.z = sphereBody.position.z
    
}
