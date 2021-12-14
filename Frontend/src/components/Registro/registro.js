import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Contexto } from "../Contexto/Contexto";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import useFetch from "use-http";
import { parseJwt } from "../../utils/jwt";
import LoginError from "../LoginError/LoginError";
import "./registro.scoped.css";

export default function Registro() {
  const [session, setSession] = useLocalStorage("session", {});
  const [, setJwt] = useLocalStorage("jwt");
  const { estado, setEstado } = useContext(Contexto);

  const [showError, setShowError] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [, setUnsuccesMsg] = useState("none");
  const [nombre, setNombre] = useState("");
  const [nombreError, setNombreError] = useState("none");
  const [apellido, setApellido] = useState("");
  const [apellidoError, setApellidoError] = useState("none");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("none");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("none");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordConfirmError, setConfirmError] = useState("none");

  const { post, response } = useFetch(process.env.REACT_APP_API_URL);

  async function doRegister() {
    const data = await post("/usuarios", { nombre, apellido, email, password });
    if (response.ok) {
      const jwt = parseJwt(data.jwt);
      const { nombre, apellido } = jwt;
      setSession({ ...jwt, nombreCompleto: nombre + " " + apellido });
      setJwt(data.jwt);
    } else {
      console.log(
        "Lamentablemente no ha podido registrarse. Por favor, intente más tarde"
      );
      setShowError(true);
    }
  }

  function handleNombreChange(e) {
    setNombre(e.target.value);
    setNombreError("none");
  }
  function handleApellidoChange(e) {
    setApellido(e.target.value);
    setApellidoError("none");
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError("none");
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);

    setPasswordError("none");
  }
  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
    setConfirmError("none");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let error = false;

    if (nombre !== "") {
    } else {
      setNombreError("Ingrese un nombre");
      error = true;
    }
    if (apellido !== "") {
    } else {
      setApellidoError("Ingrese un apellido");
      error = true;
    }

    if (email !== "") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(email)) {
        setEmailError("Ingrese un mail valido");
        error = true;
      }
    } else {
      setEmailError("Se requiere un email");
      error = true;
    }

    if (password !== "") {
      if (password.length >= 6) {
      } else {
        setPasswordError(
          "La contraseña tiene una longitud de menos de 6 caracteres"
        );
        error = true;
      }
    } else {
      setPasswordError("Se requiere una contraseña");
      error = true;
    }

    if (confirmpassword !== "") {
      if (confirmpassword === password) {
      } else {
        setConfirmError(
          "La contraseña y la confirmación de contraseña no coinciden"
        );
        error = true;
      }
    } else {
      setConfirmError("Ingrese la confirmación de contraseña");
      error = true;
    }

    validateForm(error);
  }

  function validateForm(error) {
    if (error === false) {
      doRegister();
    } else {
      //setShowError(true);
      setUnsuccesMsg("Ingrese los datos correctamente e intente nuevamente");
    }
  }

  useEffect(() => {
    setEstado({ ...estado, session });
  }, [session]);
  if (estado.session && JSON.stringify(estado.session) !== "{}") {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="registro">
        {showError && (
          <LoginError className="fas fa-exclamation-circle login-error">
            {
              "Lamentablemente no ha podido registrarse. Por favor, intente más tarde"
            }
          </LoginError>
        )}
        <div>
          <h2 className="titulo-crearcuenta">Crear cuenta</h2>
          <form onSubmit={handleSubmit}>
            <div className="credenusuario">
              <div className="usuarionombre">
                <h3>Nombre</h3>
                <input
                  type="text"
                  value={nombre}
                  name="nombre"
                  placeholder="Nombre"
                  onChange={handleNombreChange}
                />

                <div
                  className={`errorMsg ${
                    nombreError === "none" ? "hidden" : ""
                  }`}
                >
                  {nombreError}{" "}
                </div>
              </div>
              <div className="apellidousuario">
                <h3>Apellido</h3>
                <input
                  type="text"
                  value={apellido}
                  name="apellido"
                  placeholder="Apellido"
                  onChange={handleApellidoChange}
                />

                <div
                  className={`errorMsg ${
                    apellidoError === "none" ? "hidden" : ""
                  }`}
                >
                  {apellidoError}{" "}
                </div>
              </div>
            </div>

            <h3>Correo electrónico</h3>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Correo electronico "
              onChange={handleEmailChange}
            />
            <div
              className={`errorMsg ${emailError === "none" ? "hidden" : ""}`}
            >
              {emailError}{" "}
            </div>
            <h3>Contraseña</h3>
            <input
              type="password"
              value={password}
              placeholder="Contraseña "
              name="password"
              onChange={handlePasswordChange}
            />
            <div
              className={`errorMsg ${passwordError === "none" ? "hidden" : ""}`}
            >
              {passwordError}{" "}
            </div>
            <h3>Confirme la contraseña</h3>
            <input
              type="password"
              value={confirmpassword}
              placeholder="Contraseña "
              name="confirmpassword"
              onChange={handleConfirmPasswordChange}
            />
            <div
              className={`errorMsg ${
                passwordConfirmError === "none" ? "hidden" : ""
              }`}
            >
              {passwordConfirmError}{" "}
            </div>

            <div className="crearcuenta-boton">
              <button type="submit">Crear cuenta</button>
            </div>
            {/* {unsuccesMsg && <div className="errorMsg1">{unsuccesMsg} </div>} */}
          </form>
          <div className="iniciasesion">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </div>
      </div>
    </>
  );
}
