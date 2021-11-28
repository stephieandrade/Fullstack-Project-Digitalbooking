import React from "react";
import "./iconos-compartir.scoped.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

function IconosCompartir() {
  return (
    <div className="compartir">
      <FontAwesomeIcon icon={faShareAlt} />
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
}

export default IconosCompartir;
