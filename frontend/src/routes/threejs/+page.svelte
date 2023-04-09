<script>
  import { World } from "$lib/components/3d/World.js"
import { onMount } from "svelte";

function main() {
  // Get a reference to the container element that will hold our scene
  const container = document.querySelector('#canvas_wrapper');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.start();

  // We can access member variables from the instance
console.log(world.camera);
console.log(world.renderer);
console.log(world.scene);

}

onMount(() => {
  main();
});


</script>

<div id="canvas_wrapper">
</div>

<style>
    #canvas_wrapper {
        width: 100%;
        height: 72vh;
        background-color: skyblue;
    }
</style>