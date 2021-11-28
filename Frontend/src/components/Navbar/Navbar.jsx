import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import IconosSociales from "../IconosSociales/IconosSociales";
import Avatar from "../Avatar/Avatar";
import Icono from "../Icono/Icono";
import { Contexto } from "../Contexto/Contexto";
import { useHistory } from "react-router";
import "./navbar.scoped.css";

function Navbar() {
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("jwt");
    setEstado({ session: {} });
    history.push("/");
  };

  let location = useLocation();
  const { estado, setEstado } = useContext(Contexto);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  let content;
  if (estado.session && JSON.stringify(estado.session) !== "{}") {
    content = (
      <>
        <Avatar name={estado.session.nombreCompleto} className="visible" />

        <p style={{ flex: 1 }} />
        <div className="cerrar-sesion" onClick={handleClick}>
          <span className="text">¿Deseas </span>
          <span className="titulo">cerrar sesión</span>
          <span className="text">?</span>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <li className={`nav-text-menu`}>
          <Link to="/">
            <span className="nav">MENÚ</span>
          </Link>
        </li>
        <li
          className={`nav-text2  ${
            location.pathname === "/registro" ? "hidden" : ""
          }`}
        >
          <Link to="/registro">
            <span className="nav">Crear cuenta</span>
          </Link>
        </li>
        <li
          className={`nav-text2  ${
            location.pathname === "/login" ? "hidden" : ""
          }`}
        >
          <Link to="/login">
            <span className="nav">Iniciar sesión</span>
          </Link>
        </li>
      </>
    );
  }

  return (
    <div className="contenedor-hamburguesa">
      <div className="navbar">
        <Icono onClick={showSidebar} className="fas fa-bars navbar" />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Icono
              className="fas fa-times"
              style={{ fontSize: "36px", color: "#FFFFFF", margin: "10px" }}
            />
          </li>
          {content}
        </ul>
        <IconosSociales className="navbar" />
      </nav>
    </div>
  );
}

export default Navbar;
