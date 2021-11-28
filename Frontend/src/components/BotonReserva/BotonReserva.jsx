import React, { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";
import { useHistory } from "react-router-dom";

export default function BotonReserva({ id }) {
  //estados y contexto para traer la sesion local iniciada
  //  const [session, setSession] = useLocalStorage("session", {});
  const { estado } = useContext(Contexto);

  const history = useHistory();

  function RedireccionReserva() {
    console.log(estado.session);
    console.log(JSON.stringify(estado.session));
    if (estado.session && JSON.stringify(estado.session) !== "{}") {
      history.push(`/producto/${id}/reserva/`);
    }
    //mensaje de error de no sesiuon iniciada
    else history.push("/login?error=" + id);
  }

  return (
    <div className="boton-reserva">
      <button onClick={RedireccionReserva}>Iniciar reserva</button>
    </div>
  );
}
