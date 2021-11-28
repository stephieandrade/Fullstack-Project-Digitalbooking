import "./reserva-select.scoped.css";
import React, { useContext, useState } from "react";
import Select from "react-select";
import { Contexto } from "../Contexto/Contexto";

export default function ReservaSelect(props) {
  //constante opciones para guardar la hora en un estado
  const { estado, setEstado } = useContext(Contexto);

  const options = [
    { value: 1, label: "01:00 am" },
    { value: 2, label: "02:00 am" },
    { value: 3, label: "03:00 am" },
    { value: 4, label: "04:00 am" },
    { value: 5, label: "05:00 am" },
    { value: 6, label: "06:00 am" },
    { value: 7, label: "07:00 am" },
    { value: 8, label: "08:00 am" },
    { value: 9, label: "09:00 am" },
    { value: 10, label: "10:00 am" },
    { value: 11, label: "11:00 am" },
    { value: 12, label: "12:00 m" },
    { value: 13, label: "13:00 pm" },
    { value: 14, label: "14:00 pm" },
    { value: 15, label: "15:00 pm" },
    { value: 16, label: "16:00 pm" },
    { value: 17, label: "17:00 pm" },
    { value: 18, label: "18:00 pm" },
    { value: 19, label: "19:00 pm" },
    { value: 20, label: "20:00 pm" },
    { value: 21, label: "21:00 pm" },
    { value: 22, label: "22:00 pm" },
    { value: 23, label: "23:00 pm" },
    { value: 24, label: "00:00 am" },
  ];

  //estado y funcion para agarrar el valor de la hora seleccionada
  //y poder manipuilarlo y guardarlo en el contexto

  function handleChangeHora(e) {
    setEstado({
      ...estado,
      reserva: {
        ...estado.reserva,
        hora: e.value,
      },
    });
  }

  return (
    <div className="select-container">
      <Select
        options={options}
        className="select"
        placeholder="Seleccionar hora"
        name="horaReserva"
        onChange={handleChangeHora}
      />
      <div
        className={`errorMsg ${estado.errorSelectHora === "" ? "hidden" : ""}`}
      >
        {estado.errorSelectHora}{" "}
      </div>
    </div>
  );
}
