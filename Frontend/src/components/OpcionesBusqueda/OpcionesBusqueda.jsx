import React, { useState, useEffect } from "react";
import CustomSelectHome from "../CustomSelectHome/CustomSelectHome";
import "./opciones-busqueda.scoped.css";

const OpcionesBusqueda = ({ setIdCiudad, ciudades }) => {
  return (
    <div className="ciudad">
      <CustomSelectHome options={ciudades} setIdCiudad={setIdCiudad} />
    </div>
  );
};

export default OpcionesBusqueda;
