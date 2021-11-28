import React, { useEffect, useState, useContext } from "react";
import "./reserva-detalle.scoped.css";
import Estrellas from "../Estrellas/Estrellas";
import Icono from "../Icono/Icono";
import ReservaCheck from "../ReservaCheck/ReservaCheck";
import SubmitButton from "../SubmitButton/submitbutton";
import { Contexto } from "../Contexto/Contexto";

const check1 = "Check in";
const check2 = "Check out";

export default function ReservaDetalle({ data }) {
  const { estado, setEstado } = useContext(Contexto);

  return (
    <div className="contenedorReserva">
      <div className="imagenAuto">
        <h2>Detalle de la reserva</h2>
        <div
          className="img"
          style={{
            backgroundImage: `url(${data.listadeimagenes[0].urlImagen})`,
          }}
        />
      </div>
      <div className="infoAuto">
        <div className="calificacionAuto">
          <h4>{data.categoria.titulo}</h4>
          <h2>{data.nombre}</h2>
          <Estrellas />
        </div>

        {data && data.ciudad && (
          <p>
            {" "}
            <Icono
              className="fas fa-map-marker"
              style={{ fontSize: "14px", color: "#545776" }}
            />{" "}
            {data.ciudad.nombre}
          </p>
        )}

        {data && data.ciudad && <p>{data.ciudad.nombre_pais}</p>}

        <hr className="hr" />
        <ReservaCheck check={check1} fecha={estado?.reserva?.fechaInicial} />
        <hr />
        <ReservaCheck check={check2} fecha={estado?.reserva?.fechaFinal} />
        <hr />
        <div className={`errorMsg ${estado.fechaError === "" ? "hidden" : ""}`}>
          <p>{estado.fechaError}</p>
        </div>

        <SubmitButton reserva={estado.reserva} id={data.productos_id} />
      </div>
    </div>
  );
}
