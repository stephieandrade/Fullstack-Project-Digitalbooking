import React from "react";
import "./vermas.scoped.css";

//Es componente Modal y adentro de el se encuentra el carousel
const Vermas = ({ click }) => {
  return (
    <a onClick={click} href="#">
      ver más
    </a>
  );
};

export default Vermas;
