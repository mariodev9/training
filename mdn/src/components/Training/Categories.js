import React from "react";
import "../../assets/css/Training.css";
import Category from "./Category";
import SliderImg from "./SliderImg";
import ListCategories from "./CategoriesList";

export default function Section() {
  return (
    <>
      <section className="training">
        <h2>Nuestras disciplinas</h2>
        <div className="container categories">
          <div className="row centrar">
            {ListCategories.map((item) => (
              <Category name={item.name} svgicon={item.svg} />
            ))}
          </div>
        </div>
        <h2>Aventuras</h2>
        <p className="travel-description">
          En MDN contamos con viajes y salidas recreativas amet consectetur,
          adipisicing elit. Consequatur pariatur vitae omnis laudantium alias
          porro iure? Ad voluptatibus sunt facere vitae nostrum error earum
          incidunt placeat soluta magni, laborum sed?
        </p>
        <SliderImg />
      </section>
    </>
  );
}
