import Icono from "../Icono/Icono";
import "./ubicacion.scoped.css";

export default function Ubicacion() {
  return (
    <div className="ubicacion">
      <div className="detalles">
        <Icono className="fas fa-map-marker ubicacion" />
        <span className="distancia">A 940 m del centro</span>
        <span className="mapa">MOSTRAR EN EL MAPA</span>
      </div>
      <div className="iconos">
        <Icono className="fas fa-wifi ubicacion" />
        <Icono className="fas fa-car ubicacion" />
      </div>
    </div>
  );
}
