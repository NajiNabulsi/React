import React from "react";

export default function DogButton({ onClick }) {
  return (
    <button className="dogbutton" onClick={onClick}>
      Get a dog!
    </button>
  );
}
