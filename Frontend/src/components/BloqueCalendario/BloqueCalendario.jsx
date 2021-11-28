import React, { useState, useEffect } from "react";
import "./bloque_calendario.scope.css";
import Calendario from "../Calendario/Calendario";
import { Link } from "react-router-dom";
import { DateObject } from "react-multi-date-picker";
import gregorian_en_lowercase from "../Calendario/calendar.locale";
import Flecha from "../BloqueCalendario/Flecha/Flecha";
import BotonReserva from "../BotonReserva/BotonReserva";

export default function BloqueCalendario({ id }) {
  const [values, setValues] = useState([new DateObject()]);
  let filtro = new DateObject().subtract(0, "days");
  let arrow = (direction, handleClick) => (
    <Flecha direction={direction} click={handleClick} />
  );
  //estado para setear el tamanio
  const [width, setWidth] = useState(window.innerWidth);
//logica para manejar el cambio de tamanio de la pantalla responsive //
const handleResize = () => setWidth(window.innerWidth);
useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

let calDetalles;
if(width < 768){
  const PropiedadesCal = {
    readOnly: true,
    range: false,
    value: values,
    onChange: { setValues },
    minDate: filtro,
    numberOfMonths: 1,
    locale: gregorian_en_lowercase,
    renderButton: arrow,
    className: "detalles"
  };
  calDetalles = <Calendario {...PropiedadesCal} />;
}else{
  const PropiedadesCal = {
    readOnly: true,
    range: false,
    value: values,
    onChange: { setValues },
    minDate: filtro,
    numberOfMonths: 2,
    locale: gregorian_en_lowercase,
    renderButton: arrow,
    className: "detalles"
  };
  calDetalles = <Calendario {...PropiedadesCal} />;
}
  console.log(values);
 

  return (
    <>
      <div className="bloque descripcion">
        <div className="fila_calendario">
          <div className="calendarioDet">{calDetalles}</div>
          <div className="toreserva">
            <div className="pReserva">
              <p>Agregá tus fechas de viaje para obtener precios exactos</p>
            </div>
            <div className="boton-reserva">
              <BotonReserva id={id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
