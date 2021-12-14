import React from "react";
import PopupExitoso from "../PopupExitoso/PopupExitoso";
import { useContext, useEffect } from "react";
import { Contexto } from "../Contexto/Contexto";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function ProductoExitoso() {
  const [session] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);
  const { data } = estado;

  useEffect(() => {
    setEstado((estado) => ({ ...estado, session }));
  }, [session]);

  const mensajes = {
    subtitulo: "Su producto se ha creado con éxito",
    boton: "Volver",
  };
  return <PopupExitoso {...mensajes} />;
}
