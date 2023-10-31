import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{ color: props.mode === "light" ? "black" : "white" }}
          to="/"
       >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          style={{ color: props.mode === "light" ? "black" : "white" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: props.mode === "light" ? "black" : "white" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: props.mode === "light" ? "black" : "white"}}
                to="/about"
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="success-outlined"
            autocomplete="off"
          />
          <label
            className={`btn btn-outline-${
              props.mode === "success" ? "secondary" : "success"
            } mx-1`}
            onClick={props.greenMode}
            style={{
              color:
                props.mode === "danger"
                  ? "white"
                  : "green" && props.mode === "success"
                  ? "white"
                  : "green",
            }}
            htmlFor="success-outlined"
          >
            Green Mode
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="danger-outlined"
            autocomplete="off"
          />
          <label
            className={`btn btn-outline-${
              props.mode === "danger" ? "secondary" : "danger"
            } mx-1`}
            onClick={props.redMode}
            htmlFor="danger-outlined"
            style={{ color: props.mode === "success" ? "white" : "red" }}
          >
            Red Mode
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options-outlined"
            id="secondary-outlined"
            autocomplete="off"
          />
          <label
            className={`btn btn-outline-${
              props.mode === "light" ? "primary" : "secondary"
            } mx-1`}
            style={{ color: props.mode === "light" ? "black" : "white" }}
            onClick={props.toggleMode}
            htmlFor="secondary-outlined"
          >
            Dark/Light Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  aboutText: "About",
};
