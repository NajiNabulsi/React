import React from "react";

function Guarantee({ imgSrc, title, description }) {
  return (
    <div className="guaranteeCard">
      <img src={imgSrc} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;
