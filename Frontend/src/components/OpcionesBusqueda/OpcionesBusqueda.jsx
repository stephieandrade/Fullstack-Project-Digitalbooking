import React, { useState, useEffect } from "react";
import "./opciones-busqueda.scoped.css";

const OpcionesBusqueda = ({ setIdCiudad }) => {
  const [dataC, setDataC] = useState([]); //productos x ciudad

  useEffect(() => {
    const obtenerDatos = async () => {
      const UrlApiC = process.env.REACT_APP_API_URL + "/ciudades";
      const endpoint = await fetch(UrlApiC);
      const ciudades = await endpoint.json();
      setDataC(ciudades);
      console.log("ciudades" + ciudades);
    };

    obtenerDatos();
  }, []);

  const handleChange = (e) => {
    setIdCiudad(e.target.value);
  };

  return (
    <div className="ciudad">
      <select onChange={handleChange} defaultValue={0}>
        <option value={0} disabled>
          {" "}
          Selecciona una opción
        </option>
        {dataC.map((e, index) => (
          <option key={index} value={e.ciudades_id}>
            {e.nombre} - {e.nombre_pais}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OpcionesBusqueda;
