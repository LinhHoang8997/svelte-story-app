<script>
  import Seo from "$lib/components/wrapper/Seo.svelte";
  import Date from "$lib/components/Date.svelte";

  let user_logged_in = false;

  let first_image_profile_url = "https://picsum.photos/1000/1000";

</script>

<Seo
  title="Teapot Reader - DEV"
  description="The Official place for Steel, Fire, and Velvet"
/>

<header class="flex flex-auto flex-col items-center">
  <h1 class="text-3xl font-bold text-primary">Welcome to Teapot Reader</h1>
  <p class="text-xl font-bolda text-primary">
    The Official place for Steel, Fire, and Velvet
  </p>
  {#if user_logged_in}
    <!-- LOGGED-IN USER ONLY: Implement logic to track user's latest progress -->
    <h2 class="text-accent">The Adventure Thus Far ...</h2>
    <img
      src="https://picsum.photos/2024/600"
      alt="Placeholder for Arc Banner"
    />
  {/if}
  <Date dateString={"2021-09-01T15:21:39.862Z"} />

  <h2 class="text-accent">Where do you want to go?</h2>
  <div class="flex md:flex-row flex-col sm:items-start items-center">
    <div
      class="flex-auto grow-0 border-2 border-accent rounded-sm m-6 text-center w-60"
    >
      <a href="">
        <img
          class="w-60 h-auto object-cover hover:opacity-50 transition-opacity duration-300 ease-in-out"
          src={first_image_profile_url}
          alt="Profile"
        />
      </a>
      <h2 class="text-primary text-xl font-bold">The Teahouse</h2>
      <p class="text-primary text-sm">The only Teahouse at the top of the Head, and the gathering place for aristocratic ladies.</p>
    </div>
    <div
      class="flex-auto grow-0 border-2 border-accent rounded-sm m-6 text-center w-60"
    >
      <a href="">
        <img
          class="w-60 h-auto object-cover hover:opacity-50 transition-opacity duration-300 ease-in-out"
          src={first_image_profile_url}
          alt="Profile"
        />
      </a>
      <h2 class="text-primary text-xl font-bold">The Pub</h2>
      <p class="text-primary text-sm">The one place that feeds Capital's swollen belly. Her Highness, the Princess once said: "To hear mans' true thoughts, listen to their bellies"</p>
    </div>
    <div
      class="flex-auto grow-0 border-2 border-accent rounded-sm m-6 text-center w-60"
    >
      <a href="">
        <img
          class="w-60 h-auto object-cover hover:opacity-50 transition-opacity duration-300 ease-in-out"
          src={first_image_profile_url}
          alt="Profile"
        />
      </a>
      <h2 class="text-primary text-xl font-bold">The Slums</h2>
      <p class="text-primary text-sm">Storytime has started for the children living at the feet of the Citadel. They do not care who you are, as long as the iron guards accept you.</p>
    </div>
  </div>

  <h2 class="text-accent">Today's calling card</h2>
  <!-- Get calling card Component here -->
  <div>
    <img
      src="https://picsum.photos/600/300"
      alt="Placeholder for Calling Card"
    />
  </div>

  <h2 class="text-accent">Today's Coupon Card</h2>
  <!-- Get coupon card Component here -->

  <div class="h-36">
       Empty space here represent the coupon card in-universe, which can be stamped to represent reading progress and discounts in the store if people read a lot
  </div>

</header>
