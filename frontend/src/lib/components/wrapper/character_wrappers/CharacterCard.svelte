<script>
  // Get data from load function defined in +page.server.js
  export let character_data;
  $: console.log("Individual Character data: ", character_data);
  export let filtered_by_faction = null;

  // Import modules for animation
  import { onMount } from "svelte";

  // Import animation functions
  import { animate, stagger } from "motion";

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";

  // Create placeholder values each of the props (if not provided)
  let name = character_data.attributes.name || "Name";

  let character_id = character_data.attributes.character_id || null;

  let laconic_description =
    character_data.attributes.laconic_description || "Laconic description";

  // Have to check if the first image exists, otherwise use a placeholder image
  let first_image_profile_url = character_data.attributes.profile_images.data[0]
    ? PUBLIC_STRAPI_HOSTNAME_PORT +
      character_data.attributes.profile_images.data[0].attributes.url
    : "https://picsum.photos/800/1200";

  let faction = character_data.attributes.faction || "golden_palanquin";

  //  Create reactive variable to hold hover status
  let hovering = false;

  $: console.log("Hovering set to: " + hovering);
</script>

{#if faction == filtered_by_faction}
  <!-- Card for main characters -->
  {#if faction == "golden_palanquin"}
    <div
      class="flex-auto border-2 border-accent rounded-sm m-8 text-center w-64"
    >
      <a href="/characters/{character_id}">
        <img
          class="w-64 h-auto object-cover sepia-[0.20] hover:sepia-0 transition-all duration-300 ease-in-out"
          src={first_image_profile_url}
          alt="Profile"
          on:mouseenter={() => (hovering = !hovering)}
          on:mouseleave={() => (hovering = !hovering)}
        />
      </a>
      <div class="door-container h-2 flex">
        <div class="flex w-1/2 door-left">
          <div
            class="door-bg transition-all"
            class:w-0={hovering}
            class:w-full={!hovering}
          />
        </div>
        <div class="flex flex-row-reverse w-1/2 door-right">
          <div
            class="door-bg-rev transition-all"
            class:w-0={hovering}
            class:w-full={!hovering}
          />
        </div>
      </div>
      <h2 class="text-primary text-2xl font-bold">{name}</h2>
      <p class="text-primary text-sm">{laconic_description}</p>
    </div>

    <!-- Card for other characters -->
  {:else}
    <div
      class="flex-auto grow-0 border-2 border-accent rounded-sm m-6 text-center w-40"
    >
      <a href="/characters/{character_id}">
        <img
          class="w-40 h-auto object-cover sepia-[0.20] hover:sepia-0 transition-all duration-300 ease-in-out"
          src={first_image_profile_url}
          alt="Profile"
          on:mouseenter={() => (hovering = !hovering)}
          on:mouseleave={() => (hovering = !hovering)}
        />
      </a>
      <div class="door-container h-2 flex">
        <div class="flex w-1/2 door-left">
          <div
            class="door-bg transition-all"
            class:w-0={hovering}
            class:w-full={!hovering}
          />
        </div>
        <div class="flex flex-row-reverse w-1/2 door-right">
          <div
            class="door-bg-rev transition-all"
            class:w-0={hovering}
            class:w-full={!hovering}
          />
        </div>
      </div>
      <h2 class="text-primary text-xl font-bold">{name}</h2>
      <p class="text-primary text-sm">{laconic_description}</p>
    </div>
  {/if}
{/if}

<style>
  .door-bg {
    background: linear-gradient(
      90deg,
      rgb(203, 55, 19),
      rgba(106, 48, 37, 0.981)
    );
  }

  .door-bg-rev {
    background: linear-gradient(
      90deg,
      rgba(106, 48, 37, 0.981),
      rgb(203, 55, 19)
    );
  }
</style>
