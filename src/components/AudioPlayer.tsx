import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          console.log("Audio element not found");
        }
      } catch (error) {
        console.log(
          "Auto-play prevented by browser. User interaction required."
        );
        setIsPlaying(false);
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="/audio/panto-clowns-jingle-271283.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-white" />
        ) : (
          <VolumeX className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
