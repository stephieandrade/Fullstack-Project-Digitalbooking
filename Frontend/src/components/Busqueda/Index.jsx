import React, { useEffect, useState } from "react";
import OpcionesBusqueda from "../OpcionesBusqueda/OpcionesBusqueda";
import BusquedaCalendario from "../BusquedaCalendario/BusquedaCalendario";
import "./busqueda.scoped.css";
import Icono from "../Icono/Icono";

const Busqueda = ({ callAPI, ciudades }) => {
  const [idCiudad, setIdCiudad] = useState();
  const [fecha1, setFecha1] = useState();
  const [fecha2, setFecha2] = useState();

  //
  const [resetSub, setResetsub] = useState(false);
  //

  function handleChange(e) {
    let fecha1 = e[0].format("YYYY-MM-DD");
    switch (e.length) {
      case 1:
        setFecha1(fecha1);
        break;
      case 2:
        let fecha2 = e[1].format("YYYY-MM-DD");
        // Compara las fechas y las ordena de menor a mayor
        const d1 = new Date(e[0].format("YYYY-MM-DD"));
        const d2 = new Date(e[1].format("YYYY-MM-DD"));
        if (d1 > d2) {
          setFecha1(fecha2);
          setFecha2(fecha1);
        } else {
          setFecha2(fecha2);
        }
        break;
      default:
        break;
    }
  }

  const handleClick = () => {
    if (fecha1 && fecha2 && idCiudad) {
      //
      setResetsub(true);
      //
      callAPI({
        resource: "/productos/buscarPorFechasYCiudad/" + idCiudad,
        method: "POST",
        options: {
          fechaInicial: fecha1,
          fechaFinal: fecha2,
        },
      });
      return;
    }
    if (fecha1 && fecha2) {
      callAPI({
        resource: "/productos/buscarPorFechas",
        method: "POST",
        options: {
          fechaInicial: fecha1,
          fechaFinal: fecha2,
        },
      });
      return;
    }
    if (idCiudad) {
      callAPI({
        resource: "/productos/buscarPorCiudad/" + idCiudad,
      });
      return;
    }
  };

  //
  const handleClickR = () => {
    if (setResetsub) {
      callAPI({
        resource: "/productos/",
      });
    }
  };
  //

  return (
    <section className="buscar-ofertar">
      <h1 className="buscaOferta">
        Busca ofertas de vehículos económicos, deportivos o de lujo
      </h1>
      <div className="buscador">
        <OpcionesBusqueda ciudades={ciudades} setIdCiudad={setIdCiudad} />
        <div className="fechas">
          <BusquedaCalendario onChange={handleChange} />
        </div>
        <div className="contBotones">
          <button onClick={handleClick} id="btn-buscador">
            Buscar
          </button>
          <button onClick={handleClickR} className="botonRest">
            <Icono className={`fas fa-sync-alt`} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Busqueda;
