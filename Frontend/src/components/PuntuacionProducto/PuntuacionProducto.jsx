import Estrellas from "../Estrellas/Estrellas";
import "./puntuacion-producto.scoped.css";

// TODO: Generalizar Puntuacion y PuntuacionProducto en un solo componente
// ESTE COMPONENTE SE USA UNICAMENTE EN EL PRODUCTO...

export default function PuntuacionProducto({
  titulo,
  nombre,
  puntuacion,
  className,
}) {
  return (
    <>
      <div className={`calificacion ${className}`}>
        <div className="contenedor-estrellas">
          <span className="concepto">Muy bueno</span>
          <Estrellas className="estrella-home" />
        </div>
        <div className="contenedor-puntuacion">
          <div className="puntuacion">{puntuacion}</div>
        </div>
      </div>
    </>
  );
}
