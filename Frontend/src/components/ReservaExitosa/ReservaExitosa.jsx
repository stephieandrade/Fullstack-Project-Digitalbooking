import React, { useContext, useEffect } from "react";
import { Contexto } from "../Contexto/Contexto";
import PopupExitoso from "../PopupExitoso/PopupExitoso";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function ReservaExitosa() {
  const [session] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);
  const { data } = estado;

  useEffect(() => {
    setEstado((estado) => ({ ...estado, session }));
  }, [session]);

  const mensajes = {
    titulo: "¡Muchas gracias!",
    subtitulo: "Su reserva se ha realizado con éxito",
    boton: "ok",
  };
  return <PopupExitoso {...mensajes} />;
}
