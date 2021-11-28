import React from "react";
import "./politica.scoped.css";

export default function Politica({ titulo, normas }) {
  return (
    <div className="contenedor-politica">
      <h2>{titulo}</h2>
      {normas.map((norma, key) => {
        return <p key={key}>{norma}</p>;
      })}
    </div>
  );
}
