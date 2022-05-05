import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/About">
      <button className="button-82-pushable">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">Ver mas</span>
      </button>
    </Link>
  );
}
