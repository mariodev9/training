import React from "react";
import "../../assets/css/Training.css";
import Category from "./Category";
import hearthicon from "../../assets/static/hearth-Icon.png";
import trainingicon from "../../assets/static/training-Icon.png";
import athletismicon from "../../assets/static/athletism-Icon.png";

export default function Categories() {
  const categories = [
    {
      name: "Entrenamiento general",
      img: trainingicon,
    },
    {
      name: "Especializado en Obesidad",
      img: hearthicon,
    },
    {
      name: "Atletismo",
      img: athletismicon,
    },
  ];

  return (
    <div className="training">
      <h2>Nuestros entrenamientos</h2>
      <div className="row">
        {categories.map((item) => (
          <Category name={item.name} image={item.img} />
        ))}
      </div>
    </div>
  );
}
