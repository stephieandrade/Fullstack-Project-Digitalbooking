import React from "react";
import Icono from "../Icono/Icono";

function Estrellas({ className }) {
  return (
    <>
      <div className="iconos">
        <Icono className={` fas fa-star ${className}`} />
        <Icono className={` fas fa-star ${className}`} />
        <Icono className={` fas fa-star ${className}`} />
        <Icono className={` fas fa-star ${className}`} />
        <Icono className={` far fa-star ${className}`} />
      </div>
    </>
  );
}

export default Estrellas;
