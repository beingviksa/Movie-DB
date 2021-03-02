import React from "react";
import { useState } from "react";

function Accordion({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h1>{question}</h1>
        <button onClick={() => setShow(!show)}>show/hide</button>
      </div>
      {show && <p>{answer}</p>}
    </>
  );
}

export default Accordion;
