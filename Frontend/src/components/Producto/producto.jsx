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
    setEstado({ ...estado, session });
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

  if (width > 820) {
    const propiedades = {
      thumbnails: true,
      radius: " 10px 10px 0px 0px",
      width: "100%",
      dots: true,
      maxWidth: "100%",
      margin: "40px auto",
    };
    htmlSlider = (
      <div className="modal-background" onClick={() => setShow(false)}>
        <div className="modal-card">
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
    };
    htmlSlider = <Slider {...propiedades} />;
  }

  const politicas = [
    {
      titulo: "Normas del auto",
      normas: ["Hora de entrega: 10:00", "No alcohol", "No Fumar"],
    },
    {
      titulo: "Salud y seguridad",
      normas: [
        "Se aplicar la limpieza y se cumple con las normas relacionadas con el coronavirus",
        "Detector de humo",
        "Depósito de seguridad",
      ],
    },
    {
      titulo: "Política de cancelación",
      normas: [
        "Agrega las fechas de tu alquiler para obtener detalles de cancelacíon del auto",
      ],
    },
  ];
  return (
    <>
      <TituloProducto titulo={data.categoria.titulo} nombre={data.nombre} />
      <SubtituloProducto
        ciudad={data.ciudad.nombre}
        pais={data.ciudad.nombre_pais}
        puntuacion={data.puntuaciones}
      />
      <BloqueHome className="iconos-compartir">
        <IconosCompartir />
      </BloqueHome>

      <div className="contenedor-cards">
        <BloqueHome className="galeria">
          <div className="contenedorImagenes">
            <img
              src={data.listadeimagenes[0].urlImagen}
              className="audiq5"
              alt="Imagen principal"
            />
            <div className="imagenesInternas">
              <img
                src={data.listadeimagenes[1].urlImagen}
                alt="Imagen de la galería"
              />
              <img
                src={data.listadeimagenes[2].urlImagen}
                alt="Imagen de la galería"
              />
              <img
                src={data.listadeimagenes[3].urlImagen}
                className="imgTop"
                alt="Imagen de la galería"
              />
              <img
                src={data.listadeimagenes[4].urlImagen}
                className="imgTop"
                alt="Imagen de la galería"
              />
              <Botonvermas click={() => setShow(true)} />
            </div>
          </div>
        </BloqueHome>

        {htmlSlider}

        <BloqueHome className="descripcion">
          <p className="titulo">En el corazón de buenos aires</p>
          <ProductoDescripcion>
            <p className="texto">
              Está situado a solo unas calle de la avenida alvear Quintana, del
              parque San Martin y del distrito de Recoleta. En las inmediaciones
              también hay varios lugares de interés, como la calle Florida, el
              centro comercial Galerias pacífico, la zona de puerto Madero , la
              plaza de Mayo y el palacio Municipal. <br /> <br /> Nuestros
              cliente dicen que esta parte de Buenos Aires es su favorita ,
              según los comentarios independiente. <br /> <br /> El Audi Q5
              puede considerarse el hermano pequeño del Audi Q7, y de hecho los
              dos se apoyan sobre la misma plataforma, aunque en tamaños
              diferentes claro está. El nuevo Q5 se asienta sobre la estructura
              MLB Evo del Grupo Volkswagen.
            </p>
          </ProductoDescripcion>
        </BloqueHome>

        <BloqueHome className="caracteristicas">
          <p className="titulo subrayado">¿Qué ofrece este auto?</p>
          <IconosCaracteristicas />
        </BloqueHome>

        <BloqueHome className="fechas">
          <p className="titulo">Fechas disponibles</p>
          <BloqueCalendario id={data.productos_id} />
        </BloqueHome>

        {/* <BloqueHome className="ubicacion">
          <p className="titulo subrayado">¿Dónde vas a estar?</p>
          <Mapa />
          <MapView/>
        </BloqueHome> */}

        <BloqueHome className="politicas">
          <p className="titulo subrayado">¿Qué tenés que saber?</p>
          <div className="contenedor-politicas">
            {politicas.map((politica, key) => {
              return (
                <Politica
                  titulo={politica.titulo}
                  normas={politica.normas}
                  key={key}
                />
              );
            })}
          </div>
        </BloqueHome>
      </div>
    </>
  );
}
