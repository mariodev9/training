import React from "react";
import Button from "../common/Button/Button";

export default function Category({ name, svgicon }) {
  return (
    <>
      <div className="col-md-3 category">
        <div className="category-icon centrar">{svgicon}</div>
        <div className="category-title">
          <h3>{name}</h3>
        </div>
        <div className="category-info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ad
            adipisci aliquam perferendis aperiam ducimus, quaerat iste illo
            quod, rem incidunt laborum nihil reprehenderit soluta doloribus
            voluptatibus sequi laudantium asperiores.
          </p>
        </div>
      </div>
    </>
  );
}
