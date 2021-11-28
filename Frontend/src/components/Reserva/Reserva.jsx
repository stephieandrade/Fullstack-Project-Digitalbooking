import React, { useState, useContext, useEffect } from "react";
import Politica from "../Politica/politica";
import ReservaDetalle from "../ReservaDetalle/ReservaDetalle";
import FormularioReserva from "../FormularioReserva/FormularioReserva";
import "./reserva.scoped.css";
import TituloProducto from "../TituloProducto/TituloProducto";
import ReservaSelect from "../ReservaSelect/ReservaSelect";
import Calendario from "../Calendario/Calendario";
import { DateObject } from "react-multi-date-picker";
import gregorian_en_lowercase from "../Calendario/calendar.locale";
import Flecha from "../BloqueCalendario/Flecha/Flecha";
import BloqueHome from "../BloqueHome/BloqueHome";
import img1 from "./img/ok.png";
import { Contexto } from "../Contexto/Contexto";

const titulo = "Deportivo";
const nombre = "Audi R8 Spyder";

export default function Reserva() {
  const { estado, setEstado } = useContext(Contexto);
  const { data } = estado;

  const [values, setValues] = useState([
    new DateObject(),
    new DateObject().add(1, "day"),
  ]);
  //estado para setear el tamanio
  const [width, setWidth] = useState(window.innerWidth);
//logica para manejar el cambio de tamanio de la pantalla responsive //
const handleResize = () => setWidth(window.innerWidth);
useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  const politicas = [
    {
      titulo: "Normas del auto",
      normas: ["Hora de entrega: 10:00", "No alcohol", "No Fumar"],
    },
    {
      titulo: "Salud y seguridad",
      normas: [
        "Se aplicar la limpieza y se cumple con las normas relacionadas con el coronavirus",
        "Detector de humo",
        "Depósito de seguridad",
      ],
    },
    {
      titulo: "Política de cancelación",
      normas: [
        "Agrega las fechas de tu alquiler para obtener detalles de cancelacíon del auto",
      ],
    },
  ];

  //propiedades del calendario propias de la reserva
  let filtro = new DateObject().subtract(0, "days");
  let arrow = (direction, handleClick) => (
    <Flecha direction={direction} click={handleClick} />
  );
  let calReserva;
  if(width < 768){
  const PropiedadesCal = {
    readOnly: false,
    range: true,
    // value: values,
    onChange: handleChange,
    minDate: filtro,
    numberOfMonths: 1,
    locale: gregorian_en_lowercase,
    renderButton: arrow,
    className: "reserva",
  };
  calReserva = <Calendario {...PropiedadesCal} />;
}else {
  const PropiedadesCal = {
    readOnly: false,
    range: true,
    // value: values,
    onChange: handleChange,
    minDate: filtro,
    numberOfMonths: 2,
    locale: gregorian_en_lowercase,
    renderButton: arrow,
    className: "reserva",
  };
  calReserva = <Calendario {...PropiedadesCal} />;
}
  //forma de capturar los valores del dateObject para validar y manipular
  function handleChange(e) {
    switch (e.length) {
      case 1:
        const fecha = e[0].format("YYYY-MM-DD");
        // Al elegir la primer fecha elimino la fechaFinal si existe
        let { reserva } = estado;
        let { fechaFinal, ...nuevaReserva } = reserva || {};
        nuevaReserva.fechaInicial = fecha;
        setEstado({
          ...estado,
          reserva: nuevaReserva,
        });
        break;
      case 2:
        let fecha1 = e[0].format("YYYY-MM-DD");
        let fecha2 = e[1].format("YYYY-MM-DD");

        // Compara las fechas y las ordena de menor a mayor
        const d1 = new Date(fecha1);
        const d2 = new Date(fecha2);
        if (d1 > d2) {
          const temp = fecha2;
          fecha2 = fecha1;
          fecha1 = temp;
        }

        setEstado({
          ...estado,
          reserva: {
            ...estado.reserva,
            fechaInicial: fecha1,
            fechaFinal: fecha2,
          },
        });
        break;
      default:
        break;
    }
  }

 

  return (
    <div className="contenedorReserva">
      <TituloProducto titulo={data.categoria.titulo} nombre={data.nombre} />
      <h2 className="tituloReserva">Completá tus datos</h2>
      <div className="reservas">
        <div className="contenedorForm">
          <FormularioReserva />
          <h2 className="tituloReserva Cal">Seleccioná tu fecha de reserva</h2>
          <div className="reservaCalendario">{calReserva}</div>
          <h2 className="tituloReserva Hora">Tu horario de llegada</h2>
          <div className="contenedorReservaHora">
            <div className="contenedorImg">
              <img src={img1} alt="Ok" />
              <h5>
                {" "}
                Tu Automovil va a estar listo para el check-in entre las 10:00
                AM y las 11:00 PM
              </h5>
            </div>
            <p>Indicá tu horario estimado de llegada </p>
            <ReservaSelect />
          </div>
        </div>

        <div className="contenedorDetalle">
          <ReservaDetalle data={data} />
        </div>
      </div>

      <BloqueHome className="politicas">
        <p className="titulo subrayado">¿Qué tenés que saber?</p>
        <div className="contenedor-politicas">
          {politicas.map((politica, key) => {
            return (
              <Politica
                titulo={politica.titulo}
                normas={politica.normas}
                key={key}
              />
            );
          })}
        </div>
      </BloqueHome>
    </div>
  );
}
