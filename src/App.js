import "./App.css";
import { useState } from "react";
// import Sound from "react-sound";
// import thunder from "./thunder.mp3";

import Spider from "./components/Spider";
import Web from "./components/Web";
import House from "./components/House";
import Lightning from "./components/Lightning";

function App() {
  document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      setClicked(!clicked);
    }
  };

  const [clicked, setClicked] = useState(false);

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
