import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer();
  // renderer.physicallyCorrectLights = true;
  // deprecated as this is the default now, change using the renderer.useLegacyLights instead

  return renderer;
}

export { createRenderer };