import { BoxGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";

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

    // rotate the cube so we can see how light bounces off it
    cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;

}

export { createCube };