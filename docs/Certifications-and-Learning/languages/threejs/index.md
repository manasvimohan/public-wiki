# ThreeJs
Here we learn about threejs library for the web, which uses webgl to generate 3d.

# Components

**Basic Needed always

1. **Camera       <-- To see, the eyes, the way we see.
2. [Lights](Lights.md)       <-- To make things visible.
3. **Scene        <-- The environment, a physical space
4. **[Geometry](Geometry.md)     <-- The shape of any matter
5. [Textures](Textures.md)     <-- Images applied on the geometry, else normal color is applied.
6. **[Material](Material.md)     <-- The material of matter, like plastic, metal etc
7. **Mesh         <-- Geometry + Material = Mesh, the matter we wanted to make
8. Shadows      <-- How mesh interacts with light and cast shadows. 
9. **Canvas       <-- A place in the HTML file where the 3d will be created
10. **Renderer    <-- The final step, that processes and created everything in 3d
11. [Shaders](Shaders.md)     <-- This is at core on how webgl creates things
12. [Physics](Physics.md)     <-- To make things interact. External library like cannonjs is used.
13. [Interactions](Interactions.md) <-- Using mouse to interact or orbit around or move in env.

# Functionalities and techniques

1. [Importing Models](Importing Models.md)
2. [Time and Tick](Time and Tick.md) 
3. [Realistic Render](Realistic Render.md)

# Tools

## dat gui
To get a gui on browser while development to tweak different setting.

yarn add --dev dat.gui   # To add controls in the browser

import * as dat from "dat.gui"
const gui = new dat.GUI()
gui.add(material, 'metalness').min(0.1).max(0.9).step(0.001)

## Helpers
There are inbuild helpers in three js to control things ref https://threejs-journey.com/lessons/15 ending.

#
