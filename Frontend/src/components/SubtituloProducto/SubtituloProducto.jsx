import PuntuacionProducto from "../PuntuacionProducto/PuntuacionProducto";
import UbicacionProducto from "../UbicacionProducto/UbicacionProducto";
import "./subtitulo-producto.scoped.css";

export default function SubtituloProducto({ ciudad, pais, puntuacion }) {
  return (
    <div className="contenedor-subtitulo">
      <div className="subtitulo">
        <UbicacionProducto ciudad={ciudad} distancia={"a 936 metros"} />
        <PuntuacionProducto
          nombre={"nombre"}
          titulo={"titulo"}
          puntuacion={8}
          className="producto"
        />
      </div>
    </div>
  );
}
