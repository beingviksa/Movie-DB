import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayItems = ({ filteredItems }) => {
  console.log(filteredItems);
  return (
    <div>
      {filteredItems.map((item) => {
        return <DisplayItem item={item} />;
      })}
    </div>
  );
};

export default DisplayItems;
