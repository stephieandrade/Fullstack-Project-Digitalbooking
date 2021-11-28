import Icono from "../Icono/Icono";
import "./iconos-caracteristicas.scoped.css";

export default function IconosCaracteristicas() {
  return (
    <div className="contenedor-iconos">
      <div className="contenedor-icono">
        <Icono className="fas fa-wifi producto" />
        <p>Wifi</p>
      </div>
      <div className="contenedor-icono">
        <Icono className="fas fa-location-arrow producto" />
        <p>GPS</p>
      </div>

      <div className="contenedor-icono">
        <Icono className="fas fa-tablet-alt producto" />
        <p>Touch</p>
      </div>
      <div className="contenedor-icono">
        <Icono className="fas fa-wind producto" />
        <p>Air</p>
      </div>
      <div className="contenedor-icono">
        <Icono className="fas fa-play-circle producto" />
        <p>Audio</p>
      </div>
    </div>
  );
}
