<script>
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";

  export let paragraph;

  function startTextLoadAnimation() {
    animate(
      ".chapter_paragraph",
      {
        opacity: [0, 1],
      },
      {
        delay: stagger(0.25),
        duration: 1.5,
        easing: "ease-in-out",
      }
    );
  }

  onMount(() => {
    startTextLoadAnimation();
  });
</script>

<p class="chapter_paragraph">{paragraph}</p>
