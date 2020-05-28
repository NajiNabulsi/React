import React, { useState, useEffect } from "react";
import Joke from "./Joke";

export default function RandomJoke() {
  const [isLoding, setIsLoding] = useState(false);
  const [hasErorr, setHasErorr] = useState(false);
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    setIsLoding(true);

    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
      setIsLoding(false);
    } catch {
      setHasErorr(true);
      setIsLoding(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="joke">
      <h1>Exercise 3: Random Joke Generator</h1>
      <h2>JUST FOR FUN</h2>
      {isLoding && <p>Be ready for new JOKE, Loading ....</p>}
      {hasErorr && <p>SORRY MAN NO JOKES. SOMETHING IS NOT RIGHT</p>}
      <Joke setup={joke.setup} punchline={joke.punchline} />
    </div>
  );
}
