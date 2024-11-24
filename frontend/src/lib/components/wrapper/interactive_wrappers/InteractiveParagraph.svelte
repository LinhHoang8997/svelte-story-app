<script>
    import { animate, stagger } from "motion";
    import { onMount } from "svelte";

    function startTextCascade() {
    animate(
      ".rich_text_caption_paragraph",
      {
        opacity: [0, 1],
      },
      {
        delay: stagger(1.2),
        duration: 2,
        easing: "ease-in-out",
      }
    );
  }

    onMount(() => {
        startTextCascade();
    });
</script>

<p class="rich_text_caption_paragraph text-white">
    <slot></slot>
</p>