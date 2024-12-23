import React from "react";
import SnowAnimation from "./components/SnowAnimation";
import FestiveMessage from "./components/FestiveMessage";
import Background from "./components/Background";
import GeometricShapes from "./components/GeometricShapes";
import AudioPlayer from "./components/AudioPlayer";
import "./styles/animations.css";

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#070B14]">
      <Background />
      <GeometricShapes />
      <SnowAnimation />
      <AudioPlayer />

      <main className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto">
          <FestiveMessage />

          <div className="mt-12 text-center">
            <p className="text-white/80 text-xl md:text-2xl font-light tracking-wider animate-pulse">
              ✨ 2025 ✨
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
