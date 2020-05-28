import React from "react";
import "./App.css";
import Friend from "./components/Friend";
import DogGallery from "./components/DogGallery";
import RandomJoke from "./components/RandomJoke";

function App() {
  return (
    <div className="App">
      <RandomJoke />
      <Friend />
      <DogGallery />
    </div>
  );
}

export default App;
