import { DirectionalLight, AmbientLight,  HemisphereLight} from 'three'


function createLights () {
    // If we use an ambient light, we only need to provide a color and an intensity
    // const ambientLight = new AmbientLight('white', 1);

    // If we use a hemisphere light, we need to provide two colors: one for the sky and one for the ground
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        2, // intensity
      );

    const mainLight = new DirectionalLight('white', 2);
    mainLight.position.set(10,10,10)

    return {ambientLight, mainLight};
}

export { createLights };