import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  // Code to update animations for all objects in the scene, leverage the tick method of each object instead of updating them here
  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }

  // Define the start method
  start() {
    this.renderer.setAnimationLoop(() => {
      // now that we have defined the broader tick method that moves all objects, we call it here to update the animation at every frame
      this.tick();
      // render a frame here
      this.renderer.render(this.scene, this.camera);
    });
  }

  // Define the stop method
  stop() {
    this.renderer.setAnimationLoop(null);
  }
}

export { Loop };
