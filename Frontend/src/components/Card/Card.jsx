import React, { useEffect, useState } from "react";
import Puntuacion from "../Puntuacion/Puntuacion";
import Ubicacion from "../Ubicacion/Ubicacion";
import Boton from "../Boton/Boton";
import { Link } from "react-router-dom";
import "./card.scoped.css";
export default function Card({ data }) {
  const [overflow, setOverflow] = useState(false);
  const [text, setText] = useState("");
  const [puntuacion, setPuntuacion] = useState(8);

  useEffect(() => {
    if (data.descripcion.length > 120) {
      setOverflow(true);

      const index = data.descripcion.slice(0, 120).lastIndexOf(" ");
      const texto = data.descripcion.slice(0, index);
      setText(texto);
    } else {
      setText(data.descripcion);
    }

    let promedio =
      data.puntuaciones?.reduce((sum, elem) => {
        console.log(sum, elem.puntuacion);
        return elem.puntuacion + sum;
      }, 0) / data.puntuaciones.length;
    promedio = parseInt(promedio);

    if (!isNaN(promedio)) setPuntuacion(promedio);
  }, [data.descripcion]);

  return (
    <>
      <div className="card">
        <div
          className="img"
          style={{
            backgroundImage: `url(${data.listadeimagenes[0]?.urlImagen})`,
          }}
        />
        <div className="info">
          <Puntuacion
            nombre={data.nombre}
            titulo={data.categoria.titulo}
            puntuacion={puntuacion}
          />
          <Ubicacion />
          <p className="parrafoUbicacion">
            {text}

            {overflow && (
              <Link to={"/producto/" + data.productos_id}> más...</Link>
            )}
          </p>
          <span className="break" />
          <Boton
            className="button2"
            link={"/producto/" + data.productos_id}
            nombre="ver más"
          />
        </div>
      </div>
    </>
  );
}
