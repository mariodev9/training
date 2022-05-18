import React from "react";
import Button from "../common/Button/Button";

export default function Form() {
  return (
    <div className="col-md-6 chat">
      <h4>Escribinos!</h4>
      <form action="" className="formulario">
        <input className="form-control" type="text" placeholder="Nombre" />
        <div className="input-group ">
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
        <Button msg="Enviar" />
        <ul className="list-group">
          <li className="list-group-item">
            <svg
              className="icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
            >
              <rect
                x="1"
                y="1"
                width="28"
                height="22"
                rx="1"
                stroke="#332375"
                strokeWidth="2"
              />
              <path
                d="M1.49976 1.99988L13.5601 14.5069C14.3466 15.3225 15.6529 15.3225 16.4394 14.5069L28.4998 1.99988"
                stroke="#332375"
                strokeWidth="2"
              />
            </svg>
            asd123@gmail.com
          </li>
          <li className="list-group-item">
            <svg
              className="icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 0H3C2 0 0 0.6 0 3V27C0 28 0.6 30 3 30H27C28 30 30 29.4 30 27V3C30 2 29.4 0 27 0ZM7.79994 6.25001C4.43994 9.25001 9.19994 15.8333 11.9999 18.75C13.8 20.625 18 25 21 23.75C24 22.5 25.8 20.625 22.8 18.125C22 17.5 20.4 16.875 18 18.75C16.6424 19.8107 15.6 18.125 14.4 16.875C13.2 15.625 10.56 13.375 11.9999 11.875C13.7998 9.99997 13.8 10 11.9999 6.87501C10.5599 4.37501 8.59991 5.41668 7.79994 6.25001Z"
                fill="#332375"
              />
            </svg>
            2494 - 123123 / 2494 321321
          </li>
          <li className="list-group-item">
            <svg
              className="icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <circle
                cx="15"
                cy="15"
                r="7.25"
                stroke="#332375"
                strokeWidth="3"
              />
              <circle cx="23.125" cy="6.875" r="1.875" fill="#332375" />
              <rect
                x="1.5"
                y="1.5"
                width="27"
                height="27"
                rx="3.5"
                stroke="#332375"
                strokeWidth="3"
              />
            </svg>
            @mdnentrenamiento
          </li>
        </ul>
      </form>
    </div>
  );
}
