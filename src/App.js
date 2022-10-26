import "./App.css";

import Spider from "./components/Spider";
import Web from "./components/Web";
import House from "./components/House";
import Lightning from "./components/Lightning";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Spider />
        <Web />
        <House />
        <Lightning />
      </div>
    </div>
  );
}

export default App;
