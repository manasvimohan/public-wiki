# Lights

https://threejs-journey.com/lessons/15

## Functions

const ambient = new THREE.AmbientLight(color, intensity)   <-- Everywhere equal light
.DirectionalLight(color, intensity)             <-- Comes from direction infinite
.HemisphereLight(color1, color2, intensity)     <-- Two colors from opposite light
.PointLight(color, intensity, x,y,z)                   <-- Like  bulb
.RectAreaLight(color, intensity,x,y,z)                <-- Like a surface giving light
.SpotLight(color, intensity,x,y,z)                    <-- Like a torch

## Concept of Baking

For good performance, we bake the light into the material, since light calculation is not very perfromant.


