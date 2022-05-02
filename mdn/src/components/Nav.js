import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Nav.css";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className="container">
      <motion.nav
        animate={{
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        }}
        className="navbar navbar-expand-lg navbar-light bg-light "
      >
        <Link className="navbar-brand" to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="21"
            viewBox="0 0 42 21"
            fill="none"
          >
            <path
              d="M13.44 21H25.2C34.5 21 34.02 0 23.52 0H13.44V8.25L17.64 3H23.52C28.56 3 31.08 15.8431 24.36 17.25H17.64V7.5L13.44 12.75V21Z"
              fill="black"
            />
            <path
              d="M35.28 9V0.75L39.48 4.5V6.75L36.96 4.5V9H35.28Z"
              fill="black"
            />
            <path d="M40.32 0.75V7.5L42 9V0.75H40.32Z" fill="black" />
            <path
              d="M5.03997 5.25L8.39997 0.75L10.08 9H8.39997L7.55997 4.5L5.03997 8.25L3.36 5.78909L3.77997 3.375L5.03997 5.25Z"
              fill="black"
            />
            <path
              d="M1.68 0.75L0 9H1.68L2.47999 4.5L2.87998 2.25L1.68 0.75Z"
              fill="black"
            />
          </svg>
          <span className="logo-text">Entrenamiento</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <Link to={"/About"} className="nav-item">
              Quienes somos
            </Link>
            <Link to={"/"} className="nav-item">
              Entrenamiento
            </Link>
            <Link to={"/Horarios"} className="nav-item">
              Horarios
            </Link>
            <Link to={"/Contact"} className="nav-item">
              Contact
            </Link>
            <Link to={"/instagram"} className="nav-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
              >
                <circle cx="12" cy="12" r="5.75" strokeWidth="2.5" />
                <circle cx="18.5" cy="5.5" r="1.5" fill="black" />
                <rect
                  x="1.25"
                  y="1.25"
                  width="21.5"
                  height="21.5"
                  rx="3.75"
                  strokeWidth="2.5"
                />
              </svg>
            </Link>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
}
