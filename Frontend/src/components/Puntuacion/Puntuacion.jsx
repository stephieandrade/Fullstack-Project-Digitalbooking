import Estrellas from "../Estrellas/Estrellas";
import "./puntuacion.scoped.css";

// TODO: Generalizar Puntuacion y PuntuacionProducto en un solo componente
// ESTE COMPONENTE SE USA UNICAMENTE EN EL HOME...

export default function Puntuacion({ titulo, nombre, puntuacion, className }) {
  return (
    <>
      <div className={`calificacion ${className}`}>
        <div className="contenedor-estrellas">
          <div className="estrellas">
            <span className={`titulo`}>{titulo}</span>
            <Estrellas className="estrella-home" />
          </div>
          <span className={`nombre`}>{nombre}</span>
        </div>
        <div className="contenedor-puntuacion">
          <div className="puntuacion">{puntuacion}</div>
          <span className="concepto">Muy bueno</span>
        </div>
      </div>
    </>
  );
}
