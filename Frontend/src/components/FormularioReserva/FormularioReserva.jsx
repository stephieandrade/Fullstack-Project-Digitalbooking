import React, { useState, useEffect, useContext } from "react";
import "./formulario-reserva.scoped.css";
import { Contexto } from "../Contexto/Contexto";

export default function FormularioReserva({ nombre, apellido, email }) {
  //constantes de mensaje y estado para el error al no ingresar ciudad y para setear ciudad
  const { estado, setEstado } = useContext(Contexto);

  //funcion para setear la ciudad en el contexto
  function handleCiudadChange(e) {
    setEstado({
      ...estado,
      reserva: { ...estado.reserva, ciudad: e.target.value },
    });
  }

  return (
    <div className="contenedorFormulario">
      <form>
        <div className="formulario1">
          <div className="tituloinput">
            <h3>Nombre</h3>
            <input
              className="nombreInput"
              type="text"
              value={estado.session.nombre}
              name="nombre"
              placeholder="Nombre"
              disabled={true}
            />
          </div>
          <div className="tituloinput">
            <h3>Apellido</h3>
            <input
              className="apellidoInput"
              type="text"
              value={estado.session.apellido}
              name="apellido"
              placeholder="Apellido"
              disabled={true}
            />
          </div>
        </div>
        <div className="formulario2">
          <div className="tituloinput">
            <h3>Correo electrónico</h3>
            <input
              className="emailInput"
              type="email"
              name="email"
              value={estado.session.sub}
              placeholder="Correo electronico "
              disabled={true}
            />
          </div>
          <div className="tituloinput">
            <h3>Ciudad</h3>
            <input
              className="ciudadInput"
              type="text"
              //npvalue={ciudad}
              name="ciudad"
              placeholder="Ciudad"
              onChange={handleCiudadChange}
              required={true}
            />
            {
              <div
                className={`errorMsg ${
                  estado.ciudadError === "" ? "hidden" : ""
                }`}
              >
                <p className="hiddenP">{estado.ciudadError}</p>
              </div>
            }
          </div>
        </div>
      </form>
    </div>
  );
}
