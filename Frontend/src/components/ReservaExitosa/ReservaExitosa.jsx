import React from "react";
import "./reserva-exitosa.scoped.css";
import Imagen from "./img/Vector.png";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
export default function ReservaExitosa() {
  return (
    <div className="contenedorPrincipalExitoso">
      <div className="contenedorExitoso">
        <img src={Imagen} alt="Exitosa" />
        <h2>¡Muchas gracias!</h2>
        <p>Su reserva se ha realizado con éxito</p>
        <Link to="/">
          <button>ok</button>
        </Link>
      </div>
    </div>
  );
}
