import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Contexto } from "../Contexto/Contexto";
import Producto from "../Producto/producto";

export default function Auto() {
  const { id } = useParams();

  const [, setData] = useState({});
  const [cargado, setCargado] = useState(false);

  const { estado, setEstado } = useContext(Contexto);

  // TODO: Quizás podríamos revisitar el Fetch con useFetch... y eliminar Auto y dejar solo Producto, incluyendo un skeleton

  //funcion cargarDatos de la api  a cada producto (autos) en detalles
  function cargarDatos(endPoint) {
    fetch(endPoint)
      .then(function(dataApi) {
        return dataApi.json();
      })
      .then(function(dataApi) {
        setData(dataApi);
        console.log(dataApi);
        setEstado({
          ...estado,
          imagenes: dataApi.listadeimagenes,
          data: dataApi,
        });
      });
  }

  const UrlApiP = process.env.REACT_APP_API_URL + "/productos/" + id;
  console.log(UrlApiP);

  useEffect(() => {
    if (estado.imagenes) {
      setCargado(true);
    }
  }, [estado]);

  useEffect(() => cargarDatos(UrlApiP), []);

  // TODO: Aquí deberíamos hacer un Skeleton en lugar de no mostrar el componente

  return <>{cargado && <Producto />}</>;
}
