import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, [3000]);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="App">
      <div>
        <h1>Reviews</h1>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button
          type="button"
          className="prev"
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
