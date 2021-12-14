import React from "react";
import "./categoria.scoped.css";

export default function Categoria({ data, click }) {
  return (
    <>
      <div className="categoria" onClick={(e) => click(data.categorias_id)}>
        <div
          className="img"
          style={{ backgroundImage: "url(" + data.url_imagen + ")" }}
        />
        <div className="detalle">
          <span className="titulo">{data.titulo}</span>
          <span className="cantidad">{data.cantidadProductos} disponibles</span>
        </div>
      </div>
    </>
  );
}
