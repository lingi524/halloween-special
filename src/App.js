import "./App.css";
import { useState } from "react";

import Spider from "./components/Spider";
import Web from "./components/Web";
import House from "./components/House";
import Lightning from "./components/Lightning";
import useSound from "use-sound";
import thunder from "./thunder.mp3";

function App() {
  const [clicked, setClicked] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [play] = useSound(thunder);

  document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      setClicked(!clicked);

      if (!playing) {
        setPlaying(true);
        play();
      }
    }
  };

  return (
    <div className="App">
      <div className={`wrapper ${clicked ? "clicked" : ""}`}>
        <Spider />
        <Web />
        <House />
        <Lightning />
      </div>
    </div>
  );
}

export default App;
