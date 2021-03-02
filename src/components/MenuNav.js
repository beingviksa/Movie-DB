import React from "react";

function MenuNav({ getFilteredItems, items }) {
  const cat = items.map((i) => i.category);
  const uniqueCat = ["all", ...new Set(cat)];

  return (
    <div>
      {uniqueCat.map((cat) => {
        return (
          <li onClick={() => getFilteredItems(cat)} key={cat}>
            {cat}
          </li>
        );
      })}
    </div>
  );
}

export default MenuNav;
