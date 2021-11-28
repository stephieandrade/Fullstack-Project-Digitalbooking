import React from "react";
import "./reserva-check.scoped.css";

export default function ReservaCheck(props) {
  const { check, fecha } = props;
  return (
    <div className="check">
      <h5>{check}</h5>
      <h5>{fecha === undefined ? "__/__/__" : fecha}</h5>
    </div>
  );
}
