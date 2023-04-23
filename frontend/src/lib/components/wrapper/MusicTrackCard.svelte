<script>
  import { audio_player_status } from "$lib/stores/howlerStores";

  $: console.log(
    "The current value of the audio player status is",
    $audio_player_status
  );
</script>

{#if $audio_player_status.playing == true}
  <div class="bg-gray-700 pl-4 py-2 fixed bottom-6 w-full flex flex-row align-middle">
    <div class="spinning_record w-5 sm:w-20"></div>
    <div class="player_status">
      <h3>Playing</h3>
      <p>Track URL: {$audio_player_status.url}</p>
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
