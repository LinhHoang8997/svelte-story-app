<script>
  import { audio_player_status, track_current_playing_info } from "$lib/stores/howlerStores";
  import { fade } from "svelte/transition";

  $: console.log(
    "The current track info is",
    $track_current_playing_info
  );
</script>

{#if $audio_player_status.playing == true}
  <div class="bg-gray-700 pl-4 py-2 fixed bottom-6 w-full flex flex-row align-middle" transition:fade>
    <div class="spinning_record w-5 sm:w-20"></div>
    <div class="player_status">
      <p>Playing: {$track_current_playing_info.track_title}</p>
    </div>
  </div>
{/if}

<style>
  .spinning_record {
    background-image: url("$lib/assets/images/icons/vinyl.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
