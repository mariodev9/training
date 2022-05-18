import why from "../../assets/static/why.png";
import "../../assets/css/Choice.scss";
import Button from "../common/Button/Button";

export default function Choice() {
  return (
    <div className="container choice-section">
      <div className="row">
        <div className="col-md-6 centrar">
          <img src={why} alt="" />
        </div>
        <div className="col-md-6">
          <h5>por que elegirnos</h5>
          <h1>
            Aumentamos tu confianza <br /> Mejorá tu salud
          </h1>
          <ul className="choice-list">
            <li>Entrenamiento personalizado</li>
            <li>Cardio - Fuerza</li>
            <li>Salidas Recreativas - Viajes</li>
          </ul>
          <Button msg="ver mas" />
        </div>
      </div>
    </div>
  );
}
