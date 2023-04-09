import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { MathUtils } from 'three';

const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2);

    // create default specs object with named parameters for the Standard material
    const specs = {
        color: 'purple',
    }

    // create a default (white) Basic material
    const material = new MeshStandardMaterial(specs); // { color: 'purple' } instead of specs is also valid

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

     // this method will be called once per frame - every new cube created will have this method and will be rotated
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    // this use monkey patching - adding a new method to an existing object

    return cube;

}

export { createCube };