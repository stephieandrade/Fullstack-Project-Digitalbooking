import React, { useEffect, useState, useContext } from "react";
import Busqueda from "../Busqueda/Index";
import { Contexto } from "../Contexto/Contexto";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Categoria from "../Categoria/Categoria";
import Card from "../Card/Card";
import BloqueHome from "../BloqueHome/BloqueHome";
import "./home.scoped.css";

const Home = () => {
  const [session] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);

  useEffect(() => {
    setEstado({ ...estado, session });
  }, [session]);

  const [data, setData] = useState([]);
  const [dataC, setDataC] = useState([]);

  // TODO: Mejorar con useFetch

  //funcion cargarDatos de la api para categorias en home
  function cargarDatosCat(endPoint) {
    fetch(endPoint)
      .then(function(dataApiC) {
        return dataApiC.json();
      })
      .then(function(dataApiC) {
        setDataC(dataApiC);
      });
  }

  const UrlApiCategorias = "http://localhost:8085/categorias";
  useEffect(() => cargarDatosCat(UrlApiCategorias), []);

  //funcion cargarDatos de la api para productos (autos) en recomendaciones
  function cargarDatos(endPoint) {
    fetch(endPoint)
      .then(function(dataApi) {
        return dataApi.json();
      })
      .then(function(dataApi) {
        setData(dataApi);
      });
  }
  const UrlApi = "http://localhost:8085/productos";
  useEffect(() => cargarDatos(UrlApi), []);

  const handleClick = (categorias_id) => { 
    cargarDatos(
      "http://localhost:8085/productos/buscarPorCategoria/" + categorias_id
    );
  };

  return (
    <>
      <Busqueda setData={setData}/>
      <BloqueHome className="categorias">
        <p className="titulo">Buscar por tipo de auto</p>
        <div className="contenedor-categorias">
          {dataC.map((data, index) => {
            return <Categoria data={data} key={index} click={handleClick} />;
          })}
        </div>
      </BloqueHome>
      <BloqueHome name="Recomendaciones" className="recomendaciones">
        <p className="titulo">Recomendaciones</p>
        <div className="contenedor-cards">
          {data.map((data, index) => {
            return <Card data={data} key={index} />;
          })}
        </div>
      </BloqueHome>
    </>
  );
};

export default Home;
