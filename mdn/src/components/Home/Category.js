import React from "react";

export default function Category({ name, svgicon }) {
  return (
    <div className="row">
      <div class="col-sm-4 category-container">
        <div className=" category">{svgicon}</div>
      </div>
      <div className="col-sm-8 category-info">
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ad
          adipisci aliquam perferendis aperiam ducimus, quaerat iste illo quod,
          rem incidunt laborum nihil reprehenderit soluta doloribus voluptatibus
          sequi laudantium asperiores.
        </p>
      </div>
    </div>
  );
}
