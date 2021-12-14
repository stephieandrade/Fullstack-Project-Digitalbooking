import React from "react";
import "./popup-exitoso.scoped.css";
import Imagen from "./img/Vector.png";
import { Link } from "react-router-dom";
export default function PopupExitoso({ titulo, subtitulo, boton }) {
  return (
    <div className="contenedorPrincipalExitoso">
      <div className="contenedorExitoso">
        <img src={Imagen} alt="Exitosa" />
        <h2>{titulo}</h2>
        <p>{subtitulo}</p>
        <Link to="/">
          <button>{boton}</button>
        </Link>
      </div>
    </div>
  );
}
