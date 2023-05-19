<script>
  import { T } from "@threlte/core";
  import { spring } from "svelte/motion";
  import BadgeMod from "$lib/components/threlte/BadgeMod.svelte";
  import { Environment, interactivity} from "@threlte/extras";
  import { DEG2RAD } from "three/src/math/MathUtils";

  interactivity();

  const scale = spring(1)
  const rotation = spring(0);

  function onPointerEnter(event) {
    console.log("Pointer enter");
    $scale = 1.3;
    $rotation = 15* DEG2RAD
  }

  function onPointerLeave(event) {
    console.log("Pointer leave");
    $scale = 1;
    $rotation = 0;
  }

</script>


<T.PerspectiveCamera makeDefault position.z={5} position.x={0} position.y={0} />
<T.DirectionalLight intensity={0.4} position={[0, 0, 5]} />
<Environment files="/little_paris_eiffel_tower_1k.hdr" />

<T.Group scale={$scale} rotation.y={$rotation}>
  <BadgeMod on:pointerenter={onPointerEnter} on:pointerleave={onPointerLeave}/>
</T.Group>