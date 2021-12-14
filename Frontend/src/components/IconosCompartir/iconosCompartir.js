import React from "react";
import "./iconos-compartir.scoped.css";
import Icono from "../Icono/Icono";

function IconosCompartir() {
  return (
    <div className="compartir">
      <Icono className={` fas fa-share-alt`} />
      <Icono className={` fas fa-heart`} />
    </div>
  );
}

export default IconosCompartir;
