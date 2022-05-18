import React from "react";
import "../assets/css/Horarios.css";

export default function Schedule() {
  return (
    <>
      <table class="table table-striped table-schedule">
        <thead className="thead-schedule">
          <tr>
            <th scope="col">
              <svg
                id="schedule-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
              >
                <path
                  d="M18 33.8621C2 33.8621 2 33.8621 2 19.6379C2 16.1744 2.04895 13.6707 2 11.6724M32.8147 19.6379C32.8147 16.1747 32.767 13.6036 32.8147 11.6724M10.2962 6.08657C12.4129 6.08657 14.854 6.08658 18 6.08657C20.6035 6.08657 22.7406 6.08657 24.5184 6.05688M10.2962 6.08657V2M10.2962 6.08657C4.37023 6.08657 1.99998 6.08657 2 11.6724M24.5184 6.05688V2M24.5184 6.05688C30.4443 6.08657 32.8147 5.98276 32.8147 11.6724M2 11.6724H32.8147"
                  stroke="#332375"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <ellipse
                  cx="26.8889"
                  cy="28.1724"
                  rx="7.11111"
                  ry="6.82759"
                  stroke="#332375"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M26.8889 25.8966V28.7414L29.2593 31.0173"
                  stroke="#332375"
                  stroke-linecap="round"
                />
              </svg>
            </th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody className="body-schedule">
          <tr className="hora">
            <th scope="row">7:00 AM</th>
            <td>Entrenamiento General</td>
            <td></td>
            <td></td>
            <td>Atletismo</td>
            <td></td>
          </tr>
          <tr className="hora">
            <th scope="row">9:00 AM</th>
            <td></td>
            <td>Entrenamiento General</td>
            <td></td>
            <td></td>
            <td>Entrenamiento sobrepeso</td>
          </tr>
          <tr className="hora">
            <th scope="row">11:00 AM</th>
            <td></td>
            <td>Entrenamiento sobrepeso</td>
            <td>Atletismo</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="hora">
            <th scope="row">15:00 PM</th>
            <td>Atletismo</td>
            <td></td>
            <td></td>
            <td>Entrenamiento General</td>
            <td></td>
          </tr>
          <tr className="hora">
            <th scope="row">17:00 PM</th>
            <td></td>
            <td></td>
            <td>Entrenamiento sobrepeso</td>
            <td></td>
            <td>Atletismo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
