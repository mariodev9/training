import React from "react";

export default function Schedule() {
  return (
    <>
      <table class="table table-schedule">
        <thead class="thead-schedule  table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody className="body-schedule">
          <tr>
            <th scope="row">7:00 AM</th>
            <td>Entrenamiento General</td>
            <td></td>
            <td></td>
            <td>Atletismo</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">9:00 AM</th>
            <td></td>
            <td>Entrenamiento General</td>
            <td></td>
            <td></td>
            <td>Entrenamiento sobrepeso</td>
          </tr>
          <tr>
            <th scope="row">11:00 AM</th>
            <td></td>
            <td>Entrenamiento sobrepeso</td>
            <td>Atletismo</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">15:00 PM</th>
            <td>Atletismo</td>
            <td></td>
            <td></td>
            <td>Entrenamiento General</td>
            <td></td>
          </tr>
          <tr>
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
