import Icono from "../Icono/Icono";
import "./iconos-caracteristicas.scoped.css";

export default function IconosCaracteristicas({ iconos }) {
  return (
    <div className="contenedor-iconos">
      {iconos?.map((icono, index) => {
        return (
          <div className="contenedor-icono" key={index}>
            <Icono className={`${icono.icono} producto`} />
            <p>{icono.nombre}</p>
          </div>
        );
      })}
    </div>
  );
}
