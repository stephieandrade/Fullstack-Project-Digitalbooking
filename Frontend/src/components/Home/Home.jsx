import React, { useEffect, useRef, useContext } from "react";
import Busqueda from "../Busqueda/Index";
import { Contexto } from "../Contexto/Contexto";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Categoria from "../Categoria/Categoria";
import Card from "../Card/Card";
import BloqueHome from "../BloqueHome/BloqueHome";

import useService from "../../hooks/useService";

import "./home.scoped.css";

const Home = () => {
  const [session] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);
  const ref = useRef(null);

  // Configuramos las llamadas al API, usando useService
  const {
    api: getCiudades,
    data: ciudades,
    response: responseCiudades,
  } = useService();

  const {
    api: getCategorias,
    data: categorias,
    response: responseCategorias,
  } = useService();

  const {
    api: getProductos,
    data: productos,
    response: responseProductos,
  } = useService();

  // Al recibir respuesta de los endPoints actualizamos el contexto, incluimos la sessión
  useEffect(() => {
    setEstado((estado) => ({
      ...estado,
      ciudades,
      categorias,
      productos,
      session,
    }));
  }, [ciudades, categorias, productos]);

  // Ejecutar las llamadas a los diferentes endPoints
  const consultarAPI = async () => {
    await getProductos({ resource: "/productos" });
    await getCiudades({ resource: "/ciudades" });
    await getCategorias({ resource: "/categorias" });
  };

  // Ejecutar solo al montar el componentes
  useEffect(() => consultarAPI(), []);

  const handleClick = async (categorias_id) => {
    await getProductos({
      resource: "/productos/buscarPorCategoria/" + categorias_id,
    });
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Ejecuta las busquedas que indique <Busqueda/>
  const callAPI = async (a) => {
    await getProductos(a);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Busqueda callAPI={callAPI} ciudades={ciudades} />
      <BloqueHome className="categorias">
        <p className="titulo">Buscar por tipo de auto</p>

        <div className="contenedor-categorias">
          {categorias?.map((data, index) => {
            return <Categoria data={data} key={index} click={handleClick} />;
          })}
        </div>
      </BloqueHome>
      <BloqueHome name="Recomendaciones" className="recomendaciones">
        <p className="titulo" ref={ref}>
          Recomendaciones
        </p>
        <div className="contenedor-cards">
          {productos?.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </BloqueHome>
    </>
  );
};

export default Home;
