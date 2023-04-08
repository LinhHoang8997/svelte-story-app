import { createCamera } from "$lib/components/3d/components/camera";
import { createScene } from "$lib/components/3d/components/scene";
import { createRenderer } from "$lib/components/3d/systems/renderer";
import { createLights } from "$lib/components/3d/components/lights";
import { createCube } from "$lib/components/3d/components/cube";

import { Resizer } from "$lib/components/3d/systems/Resizer";

// These variables are module-scoped: we cannot access them
// from outside the module - can only one instance of the World class, or else these variables will be overwritten
let camera;
let renderer;
let scene;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render(); // this refers to the World instance
    }
    
  }
  

  // 2. Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
