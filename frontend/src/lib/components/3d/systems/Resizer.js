function setSize(container, camera, renderer) {
  // Set the camera's aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;
  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize(container.clientWidth, container.clientHeight);
  // set the pixel ratio (for mobile devices)
  renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
  constructor(container, camera, renderer) {
    setSize(container, camera, renderer);

    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);

      this.onResize();
      //placeholder function that will be overwritten when defining the World class
      // We do this because we want to call the render function of the World class

    });
  }
}

export { Resizer };
