import React, { useState } from "react";
import data from "./data";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, age, description } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }

    return number;
  };

  const handleNext = () => {
    setIndex((preIndex) => {
      return checkNumber(preIndex + 1);
    });
  };

  const handlePrev = () => {
    setIndex((preIndex) => {
      return checkNumber(preIndex - 1);
    });
  };
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{description}</h3>
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default Review;
