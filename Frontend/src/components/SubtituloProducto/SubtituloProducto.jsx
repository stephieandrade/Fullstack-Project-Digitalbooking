import { useEffect, useState } from "react";
import PuntuacionProducto from "../PuntuacionProducto/PuntuacionProducto";
import UbicacionProducto from "../UbicacionProducto/UbicacionProducto";
import "./subtitulo-producto.scoped.css";

export default function SubtituloProducto({ ciudad, pais, puntuaciones }) {
  const [puntuacion, setPuntuacion] = useState(8);

  useEffect(() => {
    let promedio =
      puntuaciones?.reduce((sum, elem) => {
        console.log(sum, elem.puntuacion);
        return elem.puntuacion + sum;
      }, 0) / puntuaciones?.length;
    promedio = parseInt(promedio);

    if (!isNaN(promedio)) setPuntuacion(promedio);
    else setPuntuacion(8);
  }, [puntuaciones]);

  return (
    <div className="contenedor-subtitulo">
      <div className="subtitulo">
        <UbicacionProducto ciudad={ciudad} distancia={"a 936 metros"} />
        <PuntuacionProducto
          nombre={"nombre"}
          titulo={"titulo"}
          puntuacion={puntuacion}
          className="producto"
        />
      </div>
    </div>
  );
}
