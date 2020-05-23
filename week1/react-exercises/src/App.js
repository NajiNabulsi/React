import React from "react";
import "./App.css";
import HobbyList from "./HobbyList";
import Guarantee from "./Guarantee";
import Counter from "./Counter";
import customerServiceInfo from "./customerService.js";

function App({ hobbies, imgSrc, title, description }) {
  return (
    <div className="App">
      <div className="exercise">Exercise 1: Extreme hobbies</div>
      <HobbyList hobbies={hobbies} />

      <div className="exercise">Exercise 2: Perfect customer service!</div>

      <div className="guarantee">
        {customerServiceInfo.map((item) => (
          <Guarantee
            key={item.title}
            imgSrc={item.imgSrc}
            alt={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="exercise">Exercise 3: It's higher than 10!</div>

      <Counter />

      <div className="exercise">End of the homework</div>
    </div>
  );
}

export default App;
