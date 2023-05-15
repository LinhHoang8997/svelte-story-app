<script>
  export let name;
  export let laconic_description;
  export let first_image_profile_url;
  export let faction;

  // Create placeholder values each of the props (if not provided)
    name = name || "Name";
    laconic_description = laconic_description || "Laconic description";
    first_image_profile_url = first_image_profile_url || "https://picsum.photos/400/600";
    faction = faction || "golden_palanquin";

  // Import environment variables
  import { PUBLIC_STRAPI_HOSTNAME_PORT } from "$env/static/public";
</script>

<!-- Card for main character -->
{#if faction == "golden_palanquin"}
<div class="flex-auto border-2 border-accent rounded-sm m-8 text-center w-32">
  <img
    class="w-auto h-auto object-cover hover:opacity-50 transition-opacity duration-300 ease-in-out"
    src="{first_image_profile_url}"
    alt="Profile"
  />
  <h2 class="text-primary text-2xl font-bold">{name}</h2>
  <p class="text-primary text-sm">{laconic_description}</p>
</div>

<!-- Card for main character -->
{:else if faction !== "golden_palanquin"}
<div class="flex-auto border-2 border-accent rounded-sm m-6 text-center w-32">
    <img
    class="w-auto h-auto object-cover hover:opacity-50 transition-opacity duration-300 ease-in-out"
      src="{first_image_profile_url}"
      alt="Profile"
    />
    <h2 class="text-primary text-xl font-bold">{name}</h2>
    <p class="text-primary text-sm">{laconic_description}</p>
  </div>
{/if}


