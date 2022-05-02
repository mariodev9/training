import React from "react";

export default function Category({ name, image }) {
  return (
    <div class="col-sm category-container">
      <div className="category">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
    </div>
  );
}
