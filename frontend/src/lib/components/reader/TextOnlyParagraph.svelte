<script>
  import { onMount } from "svelte";

  // Import components
  import { Popover } from "svelte-smooth-popover";

  // Import animation functions
  import { animate, stagger } from "motion";

  // Import string manupulation functions
  import split from "voca/split";
  import includes from "voca/includes";
  import trim from "voca/trim";

  export let paragraph_content;

  // Split the paragraph content into an array of strings, then check for special content marked by [[ ]] blocks
  $: split_text = split(paragraph_content, /\[\[|\]\]/g); // Second argument is the RegEx to identify [[ ]]

  $: processed_chunks = split_text.map((chunk) => {
    if (includes(chunk, ":popover:")) {
      const popover_subject = trim(split(chunk, ":popover:")[0]);
      const popover_content = trim(split(chunk, ":popover:")[1]);
      return {
        text: chunk,
        popover_subject: popover_subject,
        popover_content: popover_content,
      };
    } else {
      return {
        text: chunk,
      };
    }
  });

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

<p class="chapter_paragraph text-primary">
  <!-- {paragraph_content} -->
  {#each processed_chunks as chunk}
    {#if chunk.popover_subject}
      <span class="hover:cursor-pointer text-accent font-bold underline"
        >{chunk.popover_subject}<Popover
          showOnClick={true}
          hideOnExternalClick={true}
          caretWidth={12}
          caretHeight={8}
          offset={10}
          caretCurveAmount={1}
          caretCurveTopAngle={45}
          caretCurveTopStrength={0.4}
          align="top-center"
          alignAnchor="auto"
          caretBg="black"
        >
          <div
            class="flex flex-col text-center shadow-sm bg-black rounded-lg text-white p-2"
          >
            <p class="text-sm">{chunk.popover_content}</p>
          </div>
        </Popover></span
      >
    {:else}
      <span class="text-primary">{chunk.text}</span>
    {/if}
  {/each}
</p>

<style>
  p::selection {
    color: white;
    background-color: darkgoldenrod;
  }
</style>
