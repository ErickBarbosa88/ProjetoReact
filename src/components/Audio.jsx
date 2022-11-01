import React, { useEffect, useState } from "react";

import song from "../audio/ost.mp3"

export default function PlaySong(){
    const [audio, setAudio] = useState(new Audio(song));
    const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(()=> {
  //   setIsPlaying(true)
  // },[])

  const playPause =() => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

  setIsPlaying({playPause})
  setAudio(song);

  };

  const stopSong = () => {

    if (isPlaying){
      console.log('entrei aq')
      console.log(audio, typeof(audio))
      audio.pause();
      setAudio(audio.pause);
    }
    setIsPlaying(audio.pause)
    setAudio(audio.pause);
  }
    return (
      <div>
        <p>
          {isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        <button onClick={playPause}>
          Play 
        </button>
        <button onClick={stopSong}>
          Pause
          </button>
      </div>
    );
  
}

