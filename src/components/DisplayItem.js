import React from "react";

const DisplayItem = ({ item }) => {
  const { title, price, desc } = item;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default DisplayItem;
