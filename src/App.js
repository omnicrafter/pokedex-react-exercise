import React from "react";
import Pokedex from "./Pokedex";
import "./styles/App.css";

function App() {
  return (
    <React.Fragment>
      <h1 className="title">Pokedex</h1>
      <Pokedex />
    </React.Fragment>
  );
}

export default App;
