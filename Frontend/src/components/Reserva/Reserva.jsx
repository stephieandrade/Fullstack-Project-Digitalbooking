import React, { useState, useContext, useEffect } from "react";
import Politica from "../Politica/politica";
import ReservaDetalle from "../ReservaDetalle/ReservaDetalle";
import FormularioReserva from "../FormularioReserva/FormularioReserva";
import TituloProducto from "../TituloProducto/TituloProducto";
import ReservaSelect from "../ReservaSelect/ReservaSelect";
import Calendario from "../Calendario/Calendario";
import { DateObject } from "react-multi-date-picker";
import gregorian_en_lowercase from "../Calendario/calendar.locale";
import Flecha from "../BloqueCalendario/Flecha/Flecha";
import BloqueHome from "../BloqueHome/BloqueHome";
import { Contexto } from "../Contexto/Contexto";
import useService from "../../hooks/useService";
import { useParams } from "react-router";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import img1 from "./img/ok.png";
import "./reserva.scoped.css";

export default function Reserva({ main }) {
  const [session, setSession] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);
  const { id } = useParams();

  useEffect(() => {
    setEstado((estado) => ({ ...estado, session }));
  }, [session]);

  //estado para setear el tamanio
  const [width, setWidth] = useState(window.innerWidth);
  //logica para manejar el cambio de tamanio de la pantalla responsive //
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    main.current.scrollTo(0, 0);
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

  const {
    api: getProducto,
    data: producto,
    response: responseProducto,
  } = useService();

  // Evaluar si en el contexto tenemos ciudades y categorías, sino las traemos (seguramente refrescaron la página)
  useEffect(() => {
    if (!estado.data) {
      getProducto({ resource: "/productos/" + id });
    }
  }, []);

  // Al recibir respuesta de los endPoints actualizamos el contexto, incluimos la respuesta
  useEffect(() => {
    if (responseProducto.ok) {
      setEstado((estado) => {
        return { ...estado, data: producto };
      });
    }
  }, [producto]);

  const data = estado.data;

  // Función que a partir de dos fechas me genera un array con los días del mismo
  const getDaysArray = function(s, e) {
    for (var a = [], d = s; d.toDays() <= e.toDays(); d.add(1, "days")) {
      a.push(d.toDays());
    }
    return a;
  };

  if (estado.data === undefined || JSON.stringify(estado.data) === "[]") {
    console.log(JSON.stringify(estado.productos));
    return <></>;
  }

  // Obtiene un array con el rango de dias pro cada reserva
  const rangos = data.listadereservas.map((reservada) => {
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

  //propiedades del calendario propias de la reserva
  let filtro = new DateObject().subtract(0, "days");
  let arrow = (direction, handleClick) => (
    <Flecha direction={direction} click={handleClick} />
  );
  let calReserva;
  if (width < 768) {
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
      minDate: new DateObject().subtract(60, "days"),
      maxDate: new DateObject().add(364, "days"),
      mapDays: ({ date, today }) => {
        console.log(date.toDays());
        let props = {};
        let result = date.toDays() - today.toDays();
        if (result < 0) props.disabled = true;

        const isReserved = dias.includes(date.toDays());
        console.log(isReserved, today.toDays());
        if (isReserved) {
          props.disabled = true;
        }

        // TODO: Agregar la lógica para verificar fechas ocupadas
        //let isWeekend = [0, 6].includes(date.weekDay.index);
        //if (isWeekend) props.disabled = true;

        return props;
      },
    };
    calReserva = <Calendario {...PropiedadesCal} />;
  } else {
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
        setEstado((estado) => ({
          ...estado,
          reserva: nuevaReserva,
        }));
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

        setEstado((estado) => ({
          ...estado,
          reserva: {
            ...estado.reserva,
            fechaInicial: fecha1,
            fechaFinal: fecha2,
          },
        }));
        break;
      default:
        break;
    }
  }

  return (
    <div className="contenedorReserva">
      <TituloProducto titulo={data.categoria.titulo} nombre={data.nombre} />
      <h2 className="tituloReserva tittle">Completá tus datos</h2>
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
                Tu Automovil va a estar listo para el check-in hasta 24 horas
                despues de la hora seleccionada
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
          <Politica />
        </div>
      </BloqueHome>
    </div>
  );
}
