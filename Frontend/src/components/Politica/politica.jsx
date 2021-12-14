import React, { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";
import "./politica.scoped.css";

export default function Politica() {
  const { estado } = useContext(Contexto);
  const { data } = estado;

  return (
    <div className="contenedor-politica">
      <div className="pol1">
        <div className="contenedor-data">
          <h2>Normas del auto</h2>
          {data.normas.split("\n").map((norma, index) => {
            return (
              <p key={index} className="pNormas">
                {norma}{" "}
              </p>
            );
          })}
        </div>
        <div className="contenedor-data">
          <h2>Salud y seguridad</h2>
          <p className="pSyS">{data.saludYSeguridad}</p>
        </div>
      </div>
      <div className="pol2">
        <div className="contenedor-data">
          <h2>Política de cancelación</h2>
          <p className="pCancelacion">{data.politicaCancelacion}</p>
        </div>
      </div>
    </div>
  );
}
