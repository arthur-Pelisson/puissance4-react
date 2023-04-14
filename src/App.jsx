import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./game/Layout/Layout";
import Columns from "./game/Layout/Columns";
import Rows from "./game/Layout/Rows";
import Game from "./game/Game";
import Player from "./game/Player";





function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
