import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../Contexto/Contexto";
import useFetch from "use-http";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useParams, useHistory } from "react-router-dom";

import "./submit-button.scoped.css";

const SubmitButton = () => {
  const { estado, setEstado } = useContext(Contexto);
  const { reserva } = estado;

  const [jwt] = useLocalStorage("jwt");
  const { id } = useParams();

  const history = useHistory();

  // Preparo la llamada al API con el Bearer
  const options = {
    interceptors: {
      request: async ({ options }) => {
        options.headers.Authorization = `Bearer ${jwt}`;
        return options; // returning the `options` is important
      },
      response: async ({ response }) => {
        const res = response;
        return res;
      },
    },
  };
  const { post, response } = useFetch(process.env.REACT_APP_API_URL, options);

  const [unsuccesMsg, setUnsuccesMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let completed = false;
    if (reserva) {
      // 4 con los inputs obligatorios
      completed = Object.keys(reserva).length === 4;
    }
    if (!completed) {
      setUnsuccesMsg("Ingrese los datos correctamente e intente nuevamente");
      return;
    }

    console.log("Test");
    const answer = await post("/reservas", {
      fechaInicial: reserva.fechaInicial,
      fechaFinal: reserva.fechaFinal,
      horaDeReserva: reserva.hora,
      productosId: id,
    });
    console.log(response.ok);
    if (response.ok) {
      // Eliminar la reserva de la sesión
      const { reserva, ...session } = estado;
      setEstado({ ...session });
      history.push("/reservaExitosa");
    } else {
      setUnsuccesMsg(
        "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"
      );
    }
  };

  return (
    <div className="contenedor-boton">
      <form onSubmit={handleSubmit}>
        <button type="submit">Confirmar Reserva</button>
        <div className={`errorMsg ${unsuccesMsg === "" ? "hidden" : ""}`}>
          <p className="hiddenP">{unsuccesMsg}</p>
        </div>
      </form>
    </div>
  );
};

export default SubmitButton;
