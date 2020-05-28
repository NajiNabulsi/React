import React, { useState } from "react";
import DogPhoto from "./DogPhoto";
import DogButton from "./DogButton";

export default function DogGallery() {
  const [isLoding, setIsLoding] = useState(false);
  const [hasErorr, setHasErorr] = useState(false);
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    setIsLoding(true);

    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogPhotos([...dogPhotos, data.message]);
      setIsLoding(false);
    } catch {
      setHasErorr(true);
      setIsLoding(false);
    }
  };

  const handleClick = () => {
    getDogPhoto();
  };

  return (
    <div className="dogs">
      <h1>Exercise 2: Dog photo gallery</h1>
      <DogButton onClick={handleClick} />
      <div className="dogGallery">
        {dogPhotos.length === 0 ? (
          <p>Get your first dog by clicking the button!</p>
        ) : (
          dogPhotos.map((photo, i) => <DogPhoto key={i} dogUrl={photo} i={i} />)
        )}

        {isLoding && <p>Loading please wait ....</p>}

        {hasErorr && <p>something is wrong</p>}
      </div>
    </div>
  );
}
