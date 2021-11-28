import React, { useState } from "react";
import OpcionesBusqueda from "../OpcionesBusqueda/OpcionesBusqueda";
import BusquedaCalendario from "../BusquedaCalendario/BusquedaCalendario";
import "./busqueda.scoped.css";

const Busqueda = ({ setData }) => {
  const [idCiudad, setIdCiudad] = useState();
  const [fecha1, setFecha1] = useState();
  const [fecha2, setFecha2] = useState();

  const [isDisabled, setIsDisabled] = useState(true);

  function handleChange(e) {
    setIsDisabled(false);
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

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fechaInicial: fecha1,
      fechaFinal: fecha2,
    }),
  };

  const obtenerDatosPOST = async (url) => {
    const endpoint = await fetch(url, requestOptions);
    const productos = await endpoint.json();
    setData(productos);
  };

  //me trae productos por ciudad
  const obtenerDatosGET = (endPoint) => {
    fetch(endPoint)
      .then((data) => data.json())
      .then((dataParseada) => setData(dataParseada));
  };

  const handleClick = () => {
    if (fecha1 && fecha2 && idCiudad) {
      obtenerDatosPOST(
        process.env.REACT_APP_API_URL +
          "/productos/buscarPorFechasYCiudad/" +
          idCiudad
      );
      return;
    }
    if (fecha1 && fecha2) {
      obtenerDatosPOST(
        process.env.REACT_APP_API_URL + "/productos/buscarPorFechas"
      );
      return;
    }
    if (idCiudad) {
      obtenerDatosGET(
        process.env.REACT_APP_API_URL + "/productos/buscarPorCiudad/" + idCiudad
      );
      return;
    }
  };

  return (
    <section className="buscar-ofertar">
      <h1 className="buscaOferta">
        Busca ofertas de vehículos económicos, deportivos o de lujo
      </h1>
      <div className="buscador">
        <OpcionesBusqueda
          setIdCiudad={(e) => {
            setIsDisabled(false);
            setIdCiudad(e);
          }}
        />
        <div className="fechas">
          <BusquedaCalendario onChange={handleChange} />
        </div>
        <button
          onClick={(e) => handleClick()}
          id="btn-buscador"
          disabled={isDisabled}
        >
          Buscar
        </button>
      </div>
    </section>
  );
};
export default Busqueda;
