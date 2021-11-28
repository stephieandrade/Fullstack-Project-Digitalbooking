import { useHistory } from "react-router-dom";
import Icono from "../Icono/Icono";
import "./titulo-producto.scoped.css";

export default function TituloProducto({ titulo, nombre }) {
  const history = useHistory();

  const onClick = () => {
    history.goBack();
  };

  return (
    <div className="contenedor-titulo">
      <div className="vehiculo">
        <div className="referencia">
          <p>{titulo}</p>
          <h2>{nombre}</h2>
        </div>
        <Icono
          className="fas fa-chevron-left click"
          onClick={onClick}
          style={{ fontSize: "28px" }}
        />
      </div>
    </div>
  );
}
