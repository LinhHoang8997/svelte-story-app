import { writable } from "svelte/store";
import { derived } from "svelte/store";

export const howler_queue = writable([]);
export const test_queue = writable([]);

function createAudioPlayer () {

    const default_state = {
        url: "",
        playing: false,
    }

  const { subscribe, set } = writable(default_state);

  return {
    subscribe,
    setPlaying: (new_url) => set({ url: new_url, playing: true }),
    setEnded: () => set({ url: "", playing: false }),
    reset: () => set(0),
  };
};

export const audio_player_status = createAudioPlayer();

// export const howler_queue_current_playing = derived(howler_queue,
//     ($howler_queue) => {

//         let playing = false;
//         let current_playing_instance = null;
//         if ($howler_queue.length > 0) {
//             console.log("Howler queue is not empty");
//             current_playing_instance = $howler_queue[0];
//             playing = current_playing_instance.playing();
//             return playing;
//         }
//     }
// );
