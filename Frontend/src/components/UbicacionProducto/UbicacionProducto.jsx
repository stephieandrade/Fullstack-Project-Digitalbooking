import Icono from "../Icono/Icono";
import "./ubicacion-producto.scoped.css";

export default function Ubicacion({ ciudad, distancia }) {
  return (
    <div className="ubicacion">
      <Icono className="fas fa-map-marker ubicacion" />
      <div className="detalles">
        <span className="ciudad">{ciudad}</span>
        <span className="distancia">{distancia}</span>
      </div>
    </div>
  );
}
