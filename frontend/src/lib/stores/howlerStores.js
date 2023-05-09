import { derived, writable } from "svelte/store";
import { get } from "svelte/store";

export const howler_queue = writable([]);
export const metadata_queue = writable([]);

// Create a store to keep track of the current audio player status + filename it is playing
function createAudioPlayer () {

    const default_state = {
        filename: "",
        playing: false,
    }

  const { subscribe, set } = writable(default_state);

  return {
    subscribe,
    setPlaying: (new_filename) => set({ filename: new_filename, playing: true }),
    setEnded: () => set({ filename: "", playing: false }),
    reset: () => set(0),
  };
};
export const audio_player_status = createAudioPlayer();

export const track_current_playing_info = derived(audio_player_status,
    ($audio_player_status) => {
        let matched_data = null;

        // Check if the filename matches, then start collecting metadata
        if ($audio_player_status.filename != "" && $audio_player_status.playing == true) {
            let metadata = get(metadata_queue);
            matched_data = metadata.find((track) => track.track_filename == $audio_player_status.filename);

        }
        return matched_data;
      }
);
