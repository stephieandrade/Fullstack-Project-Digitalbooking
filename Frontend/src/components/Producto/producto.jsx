import React, { useContext, useState, useEffect } from "react";
import ProductoDescripcion from "../ProductoDescripcion/ProductoDescripcion";
import IconosCaracteristicas from "../IconosCaracteristicas/IconosCaracteristicas";
import Botonvermas from "../Botonvermas/vermas";
import IconosCompartir from "../IconosCompartir/iconosCompartir";
import { Contexto } from "../Contexto/Contexto";
import Slider from "../Slider/Slider";
import Politica from "../Politica/politica";
import Mapa from "../Mapa/mapa";
import BloqueHome from "../BloqueHome/BloqueHome";
import TituloProducto from "../TituloProducto/TituloProducto";
import SubtituloProducto from "../SubtituloProducto/SubtituloProducto";
import BloqueCalendario from "../BloqueCalendario/BloqueCalendario";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./producto.scoped.css";

export default function Producto() {
  const [session] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);
  const { data } = estado;

  useEffect(() => {
    setEstado((estado) => ({ ...estado, session }));
  }, [session]);

  const [width, setWidth] = useState(window.innerWidth);

  //logica para manejar el cambio de tamanio de la pantalla responsive //
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //logica de renderizacion del slider por medio del boton ver mas
  const [show, setShow] = useState(false);

  let htmlSlider;

  if (width > 992) {
    const propiedades = {
      thumbnails: true,
      radius: " 10px 10px 0px 0px",
      width: "100%",
      dots: true,
      maxWidth: "100%",
      margin: " auto",
      showNavBtn: true,
    };
    htmlSlider = (
      <div className="modal-background">
        <div className="modal-card">
          <div className="cerrarModal" onClick={() => setShow(false)}>
            X
          </div>
          <Slider {...propiedades} />
        </div>
      </div>
    );
    if (!show) {
      htmlSlider = <></>;
    }
  } else {
    const propiedades = {
      thumbnails: false,
      radius: " 0px 0px 0px 0px",
      width: "100%",
      dots: false,
      maxWidth: "100%",
      margin: "auto",
      showNavBtn: false,
    };
    htmlSlider = <Slider {...propiedades} />;
  }

  const obtenerImagenes = () => {
    let imagenes = [...data.listadeimagenes];

    imagenes = imagenes.concat(
      Array(5).fill({ urlImagen: "https://img.digibook.link/coming-soon.jpeg" })
    );

    const imgs = imagenes.slice(1, 5).map((elem, index) => {
      return (
        <div
          className="img"
          key={index}
          style={{
            backgroundImage: `url(${elem.urlImagen})`,
          }}
          alt="Imagen de la galería"
        />
      );
    });

    return imgs;
  };

  return (
    <>
      <TituloProducto
        titulo={estado.data.categoria.titulo}
        nombre={estado.data.nombre}
      />
      <SubtituloProducto
        ciudad={estado.data.ciudad?.nombre}
        pais={estado.data.ciudad?.nombre_pais}
        puntuaciones={estado.data.puntuaciones}
      />
      <BloqueHome className="iconos-compartir">
        <IconosCompartir />
      </BloqueHome>

      <div className="contenedor-cards">
        <BloqueHome className="galeria">
          <div className="contenedorImagenes">
            <div
              style={{
                backgroundImage: `url(${data.listadeimagenes[0]?.urlImagen})`,
              }}
              className="main"
              alt="Imagen principal"
            />
            <div className="imagenesInternas">
              {obtenerImagenes()}

              <Botonvermas click={() => setShow(true)} />
            </div>
          </div>
        </BloqueHome>

        {htmlSlider}

        <BloqueHome className="descripcion">
          <p className="titulo">El auto más rápido de la ciudad</p>
          <ProductoDescripcion>
            <p className="texto">
              {data.descripcion.split("\n").join("<br/>")}
            </p>
          </ProductoDescripcion>
        </BloqueHome>

        <BloqueHome className="caracteristicas">
          <p className="titulo subrayado">¿Qué ofrece este auto?</p>
          <IconosCaracteristicas iconos={estado.data.caracteristicas} />
        </BloqueHome>

        <BloqueHome className="fechas">
          <p className="titulo">Fechas disponibles</p>
          <BloqueCalendario
            id={data.productos_id}
            reservadas={data.listadereservas}
          />
        </BloqueHome>

        {/* <BloqueHome className="ubicacion">
          <p className="titulo subrayado">¿Dónde vas a estar?</p>
          <Mapa />
          <MapView/>
        </BloqueHome> */}

        <BloqueHome className="politicas">
          <p className="titulo subrayado">¿Qué tenés que saber?</p>
          <div className="contenedor-politicas">
            <Politica />
          </div>
        </BloqueHome>
      </div>
    </>
  );
}
