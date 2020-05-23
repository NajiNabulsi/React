import React from "react";

function Guarantee({ imgSrc, alt, title, description }) {
  return (
    <div className="guaranteeCard">
      <img src={imgSrc} alt={alt}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;
