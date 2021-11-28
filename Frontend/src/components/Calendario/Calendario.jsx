import React from "react";
import { Calendar } from "react-multi-date-picker";
import "./calendario.css";
import "./calendario-detalles.css";
import "./calendario-reserva.css";

export default function Calendario(props) {
  return (
    <>
      <div className="contCalendario">
        <Calendar {...props} />
      </div>
    </>
  );
}


