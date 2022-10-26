import { render } from "@testing-library/react";
import React, { useState } from "react";

import song from "../audio/ost.mp3"

let song = new Audio(song);
song.play();
song.pause();

export default function PlaySong(){
    const [audio, setAudio] = useState(new Audio(song));
    const [isPlaying, setIsPlaying] = useState(false);

  const playPause =() => {

    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      audio.pause();
    } else {

      audio.play();
    }

setIsPlaying()

    setState({ isPlaying: !isPlaying });
  };

 
    return (
      <div>
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        <button onClick={playPause}>
          Play | Pause
        </button>
      </div>
    );
  
}

