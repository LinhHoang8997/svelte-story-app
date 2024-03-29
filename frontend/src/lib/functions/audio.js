import { Howl } from "howler";
import { audio_player_status } from "$lib/stores/howlerStores";
import { metadata_queue } from "$lib/stores/howlerStores";

let cross_fade_duration = 7000;
let default_volume = 0.7;

export function createHowlerInstance(urls, onload) {
  return new Howl({
    src: urls,
    preload: true,
    loop: false,
    volume: 0,
    onload: onload,
    onplay: function () {
      // console.log("Sound URL: ", this._src, " is playing");
      let filename = this._src.split("/").pop();
      audio_player_status.setPlaying(filename);
    },
    onend: function () {
      // console.log("Sound URL: ", this._src, " has ended");
      audio_player_status.setEnded();
    },
  });
}

export function crossFadeLoop(
  leaving_instance = null,
  entering_instance = null,
  fade_type
) {
  // If there is no leaving instance, create new Howlwer instance for the audio file and fade it in
  function fadeIntoVoid(leaving_instance, entering_instance = null) {
    leaving_instance.fade(leaving_instance.volume(), 0, cross_fade_duration);
    console.log("Sound URL: ", leaving_instance._src, " is fading out");
    leaving_instance.once("volume", function () {
      if (leaving_instance.volume() == 0) {
        console.log("Sound URL: ", leaving_instance._src, " has stopped");
        leaving_instance.stop();
      }
    });
  }

  function fadeIntoFirst(leaving_instance = null, entering_instance) {
    entering_instance.seek(0);
    entering_instance.play();
    console.log("Sound should be playing soon");
    entering_instance.fade(0, default_volume, cross_fade_duration);
  }

  // If there is a leaving instance, immediately fade out the leaving instance and fade in the entering instance
  function fadeIntoSecond(leaving_instance, entering_instance) {
    // Fade out the leaving instance by decreasing volume from default volume to 0
    leaving_instance.fade(leaving_instance.volume(), 0, cross_fade_duration);
    console.log("Sound URL: ", leaving_instance._src, " is fading out");

    leaving_instance.once("volume", function () {
      if (leaving_instance.volume() == 0) {
        console.log("Sound URL: ", leaving_instance._src, " has stopped");
        leaving_instance.stop();
      }
    });

    // Fade in the entering instance by increasing volume from 0 to default volume
    entering_instance.seek(0);
    entering_instance.play();
    entering_instance.fade(0, default_volume, cross_fade_duration);
    console.log("Sound URL: ", entering_instance._src, " is fading in");

  }

  // When we let the two tracks end and start naturally, use the fadeMusicPlayer function to start the crossfade when the leaving instance is about to end
  function fadeMusicPlayer(leaving_instance, entering_instance) {
    var leaving_instance_duration = Math.floor(
      leaving_instance._duration * 1000
    );
    console.log(`Duration of the entering: ${leaving_instance_duration}`);

    // Get point in which crossFade should kick in
    var cross_fade_starting_point =
      leaving_instance_duration - cross_fade_duration;
    console.log(
      `Start crossfading at the ${cross_fade_starting_point}-second point of the leaving track.
        A timeout was started when the first track was loaded, after which the crossfade will start.`
    );

    // Create a timeout, after which the crossfade will start
    setTimeout(function () {
      console.log("Time out done");
      leaving_instance.fade(default_volume, 0, cross_fade_duration);
      entering_instance.play();
      entering_instance.fade(0, default_volume, cross_fade_duration); // Fade in the entering instance by increasing volume from 0 to default volume
    }, cross_fade_starting_point);
  }

  var fade_type_assignment = {
    "fade-into-first": fadeIntoFirst,
    "fade-into-second": fadeIntoSecond,
    "fade-music-player": fadeMusicPlayer,
    "fade-into-void": fadeIntoVoid,
  };
  // let entering_load_status = entering_instance.once('load', function() { return true});
  // let leaving_load_status = leaving_instance.once('load', function() { return true});

  return fade_type_assignment[fade_type](leaving_instance, entering_instance);
}

export function initiateMusicPlayerLoop(leaving_url, entering_url) {
  let leaving_instance = createHowlerInstance(leaving_url);
  leaving_instance.once("load", function () {
    let entering_instance = createHowlerInstance(entering_url);
    crossFadeLoop(leaving_instance, entering_instance, "fade-music-player");
  });
}
