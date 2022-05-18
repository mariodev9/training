import React from "react";
import "./Button.css";

export default function Button({ msg }) {
  return (
    <button className="button-82-pushable">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">{msg}</span>
    </button>
  );
}
