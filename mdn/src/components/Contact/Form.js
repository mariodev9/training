import React from "react";

export default function Form() {
  return (
    <div className="col-md-6 ">
      <h4>Escribenos</h4>
      <form action="">
        <input class="form-control" type="text" placeholder="Nombre" />

        <div class="input-group ">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <textarea
          className="form-control"
          aria-label="With textarea"
          placeholder="Escribe un mensaje"
        ></textarea>
      </form>
      <h5>instagram</h5>
      <h5>telefono</h5>
      <h5>mail</h5>
    </div>
  );
}
