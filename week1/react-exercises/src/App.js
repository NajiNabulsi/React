import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HobbyList from "./HobbyList";
import Guarantee from "./Guarantee";
import Counter from "./Counter";

function App({ hobbies, imgSrc, title, description }) {
  return (
    <div className="App">
      <div className="exercise">Exercise 1: Extreme hobbies</div>
      <HobbyList hobbies={hobbies} />

      <div className="exercise">Exercise 2: Perfect customer service!</div>

      <div className="guarantee">
        <Guarantee
          imgSrc="f-delivery.png"
          title="Free shipping"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum modi optio. Nemo temporibus, qui magnam maiores corporis dolor, quisquam ut perferendis consequuntur doloremque autem hic, accusantium quis velit! Modi?"
        />

        <Guarantee
          imgSrc="coin.png"
          title="100% Money back"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum modi optio. Nemo temporibus, qui magnam maiores corporis dolor, quisquam ut perferendis consequuntur doloremque autem hic, accusantium quis velit! Modi?"
        />

        <Guarantee
          imgSrc="chat.png"
          title="Online support 24/7"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum modi optio. Nemo temporibus, qui magnam maiores corporis dolor, quisquam ut perferendis consequuntur doloremque autem hic, accusantium quis velit! Modi?"
        />
      </div>
      <div className="exercise">Exercise 3: It's higher than 10!</div>
      <Counter />
      <div className="exercise">End of the homework</div>
    </div>
  );
}

export default App;
