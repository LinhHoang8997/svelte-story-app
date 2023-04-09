import { createCamera } from "$lib/components/3d/components/camera";
import { createScene } from "$lib/components/3d/components/scene";
import { createRenderer } from "$lib/components/3d/systems/renderer";
import { createLights } from "$lib/components/3d/components/lights";
import { createCube } from "$lib/components/3d/components/cube";

import { Resizer } from "$lib/components/3d/systems/Resizer";
import { Loop } from "$lib/components/3d/systems/Loop.js";

// These variables are module-scoped: we cannot access them
// from outside the module - can only one instance of the World class, or else these variables will be overwritten
let camera;
let renderer;
let scene;
let loop;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    loop = new Loop(camera, scene, renderer);

    const cube = createCube();
    const light = createLights();

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render(); // this refers to the World instance
    // };

    // Add objects on the scene to the loop's updatables array - This will allow the loop to call the tick method of each object
    loop.updatables.push(cube);
  }

  // Add start method to the World class - which call the loop's start method
  start() {
    loop.start();
  }

  // Add stop method to the World class - which call the loop's stop method
  stop() {
    loop.stop();
  }

  // 2. Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
