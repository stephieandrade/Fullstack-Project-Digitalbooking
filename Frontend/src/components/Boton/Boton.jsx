import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./boton.scoped.css";

const Boton = (props) => {
  const {
    link,
    nombre,
    className,
    showError = false,
    errorMessage,
    ...data
  } = props;

  // SI se le pasa un link, crea un botón que vanega dentro del router
  if (typeof link === "string") {
    return (
      <>
        <Link to={link} className={className}>
          {nombre}
        </Link>
      </>
    );
  }
  // Por defecto devuelve un botón normal
  return (
    <div className="contenedor-boton">
      <button onClick={link} className={className} {...data}>
        {nombre}
      </button>
      <span className={`error ${showError ? "" : "hidden"}`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default Boton;
