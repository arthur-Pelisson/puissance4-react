import { useState } from "react";
import Layout from "./game/Layaout/Layout";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout columns={10} rows={10} />
    </div>
  );
}

export default App;
