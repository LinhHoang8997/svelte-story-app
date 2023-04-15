import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    // Define the tick method of the controls object
    controls.tick = () => {
        controls.update();
    };

    return controls;
}

export { createControls };