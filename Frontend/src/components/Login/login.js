import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Contexto } from "../Contexto/Contexto";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import useQuery from "../../hooks/useQuery";
import LoginError from "../LoginError/LoginError";
import { validateEmail, validatePassword } from "../../utils/validate";
import Boton from "../Boton/Boton";
import BloqueHome from "../BloqueHome/BloqueHome";
import useFetch from "use-http";
import { parseJwt } from "../../utils/jwt";

import "./login.scoped.css";

import Input from "../Input/Input";
import Icono from "../Icono/Icono";

export default function Login() {
  const [session, setSession] = useLocalStorage("session", {});
  const [jwt, setJwt] = useLocalStorage("jwt", null);
  const { estado, setEstado } = useContext(Contexto);

  const history = useHistory();

  const query = useQuery();

  const [validar, setValidar] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [formError, setFormError] = useState(false);

  const onError = () => {
    setFormError(true);
  };

  const { post, response } = useFetch(process.env.REACT_APP_API_URL);

  async function doLogin({ emailValue, passwordValue }) {
    const data = await post("/usuarios/login", {
      email: emailValue,
      password: passwordValue,
    });
    if (response.ok) {
      const jwt = parseJwt(data.jwt);
      const { nombre, apellido } = jwt;

      setSession({ ...jwt, nombreCompleto: nombre + " " + apellido });
      setJwt(data.jwt);
    } else {
      setShowError(
        "Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde"
      );
    }
  }
  useEffect(() => {
    if (email.error === false && password.error === false)
      doLogin({
        emailValue: email.value,
        passwordValue: password.value,
      });
  }, [validar]);

  useEffect(() => {
    if (jwt) navigate();
  }, [jwt]);

  function navigate() {
    // Si provenía de un error, redirigir a la página de reserva
    const id = query.get("error");
    if (id) {
      history.push(`/producto/${query.get("error")}/reserva`);
    } else {
      history.push(`/`);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    //if (!formError) doLogin();
    setValidar((validar) => validar + 1);
  }

  const onChange = () => {
    //setShowError(false);
    setFormError(false);
  };

  useEffect(() => {
    setEstado({ ...estado, session });
  }, [session]);

  useEffect(() => {
    if (query.get("error"))
      setShowError("Para realizar una reserva necesitas estar logueado");
  }, [query]);

  if (estado.session && JSON.stringify(estado.session) !== "{}") {
    return <Redirect to="/" />;
  }

  return (
    <>
      <BloqueHome className="login">
        {/* El form debería se un componente q tenga un botón submit.. y la lógica del onChange y el setShowError deberían ser propias de él */}

        <div className="contenedor-login">
          {showError && (
            <LoginError className="fas fa-exclamation-circle login-error">
              {showError}
            </LoginError>
          )}

          <p className="titulo-sesion">Iniciar sesión</p>
          <form onSubmit={handleSubmit} noValidate>
            <Input
              title="Correo electrónico"
              placeholder="correo electrónico"
              className="login email"
              name="email"
              id="email"
              required
              validar={validar}
              update={setEmail}
              validate={validateEmail}
              errorMessage={"Ingrese un email válido"}
              emptyMessage={"Se requiere un email"}
              onChange={onChange}
              onError={onError}
            />

            <Input
              title="Contraseña"
              placeholder="Contraseña"
              className="login password"
              name="password"
              id="password"
              type="password"
              required
              update={setPassword}
              validar={validar}
              validate={validatePassword}
              errorMessage={
                "La contraseña tiene una longitud de menos de 6 caracteres"
              }
              emptyMessage={"Se requiere una contraseña"}
              onChange={onChange}
              onError={onError}
            >
              <Icono
                className="input"
                showIcon="fas fa-eye"
                hideIcon="fas fa-eye-slash"
              />
            </Input>
            <Boton
              type="submit"
              nombre="Ingresar"
              className="button2"
              errorMessage={"Datos incorrectos"}
              // showError={showError}
            />
          </form>
          <div className="registrate">
            <p>¿Aún no tienes cuenta?</p>
            <Link to="/registro">Registrarse</Link>
          </div>
        </div>
      </BloqueHome>
    </>
  );
}
