import React from "react";
import Puntuacion from "../Puntuacion/Puntuacion";
import Ubicacion from "../Ubicacion/Ubicacion";
import Boton from "../Boton/Boton";
import "./card.scoped.css";
export default function Card({ data }) {
  return (
    <>
      <div className="card">
        <div
          className="img"
          style={{
            backgroundImage: `url(${data.listadeimagenes[0].urlImagen})`,
          }}
        />
        <div className="info">
          <Puntuacion
            nombre={data.nombre}
            titulo={data.categoria.titulo}
            puntuacion={8}
          />
          <Ubicacion />
          <p className="parrafoUbicacion">
            {data.descripcion}
            <span> más...</span>
          </p>
          <Boton
            className="button2"
            link={"/producto/" + data.productos_id}
            nombre="ver más"
          />
        </div>
      </div>
    </>
  );
}
