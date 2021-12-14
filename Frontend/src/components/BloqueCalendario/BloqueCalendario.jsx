import React, { useState, useEffect } from "react";
import "./bloque_calendario.scope.css";
import Calendario from "../Calendario/Calendario";
import { Link } from "react-router-dom";
import { DateObject } from "react-multi-date-picker";
import gregorian_en_lowercase from "../Calendario/calendar.locale";
import Flecha from "../BloqueCalendario/Flecha/Flecha";
import BotonReserva from "../BotonReserva/BotonReserva";

export default function BloqueCalendario({ id, reservadas }) {
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

  // Función que a partir de dos fechas me genera un array con los días del mismo
  const getDaysArray = function(s, e) {
    for (var a = [], d = s; d.toDays() <= e.toDays(); d.add(1, "days")) {
      a.push(d.toDays());
    }
    return a;
  };

  // Obtiene un array con el rango de dias pro cada reserva
  const rangos = reservadas.map((reservada) => {
    return getDaysArray(
      new DateObject(reservada.fechaInicial),
      new DateObject(reservada.fechaFinal)
    );
  });

  // Obtiene un array con todos los días que está reservado el vehiculo (sin duplicado)
  let dias = rangos;
  if (rangos.length !== 0) {
    dias = rangos.reduce((a, b) => {
      return [...new Set([...a, ...b])];
    });
  }

  console.log(dias);
  console.log(dias.length);

  let calDetalles;
  if (width < 768) {
    const PropiedadesCal = {
      readOnly: true,
      range: false,
      value: values,
      onChange: { setValues },

      numberOfMonths: 1,
      locale: gregorian_en_lowercase,
      renderButton: arrow,
      className: "detalles",
      readOnly: true,
      minDate: new DateObject().subtract(60, "days"),
      maxDate: new DateObject().add(364, "days"),
      mapDays: ({ date, today }) => {
        let props = {};
        let result = date.toDays() - today.toDays();
        if (result < 0) props.disabled = true;

        const isReserved = dias.includes(date.toDays());
        if (isReserved) {
          props.disabled = true;
        }

        // TODO: Agregar la lógica para verificar fechas ocupadas
        //let isWeekend = [0, 6].includes(date.weekDay.index);
        //if (isWeekend) props.disabled = true;

        return props;
      },
    };
    calDetalles = <Calendario {...PropiedadesCal} />;

    // Mobile Tablet
  } else {
    // Desktop
    const PropiedadesCal = {
      readOnly: true,
      range: false,
      value: values,
      onChange: { setValues },
      minDate: filtro,
      numberOfMonths: 2,
      locale: gregorian_en_lowercase,
      renderButton: arrow,
      className: "detalles",
      readOnly: true,
      minDate: new DateObject().subtract(60, "days"),
      maxDate: new DateObject().add(364, "days"),
      mapDays: ({ date, today }) => {
        let props = {};
        let result = date.toDays() - today.toDays();
        if (result < 0) props.disabled = true;

        const isReserved = dias.includes(date.toDays());
        if (isReserved) {
          props.disabled = true;
        }

        // TODO: Agregar la lógica para verificar fechas ocupadas
        //let isWeekend = [0, 6].includes(date.weekDay.index);
        //if (isWeekend) props.disabled = true;

        return props;
      },
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
