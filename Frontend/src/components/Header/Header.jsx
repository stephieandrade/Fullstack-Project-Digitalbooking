import React, { useState, useEffect, useContext } from "react";
import Logo from "../Logo/Logo";
import BotonesHeader from "../BotonesHeader/BotonesHeader";
import Avatar from "../Avatar/Avatar";
import Navbar from "../Navbar/Navbar";
import { Contexto } from "../Contexto/Contexto";
import "./header.scoped.css";
import AdminLink from "../AdminLink/AdminLink";

function Header() {
  const [content, setContent] = useState("");
  const { estado } = useContext(Contexto);

  useEffect(() => {
    if (estado.session && JSON.stringify(estado.session) !== "{}") {
      setContent(
        <>
          <Avatar name={estado.session.nombreCompleto} className="" />
          <Navbar />
        </>
      );
    } else {
      setContent(
        <>
          <BotonesHeader />
          <Navbar />
        </>
      );
    }
  }, [estado]);

  return (
    <>
      <header>
        <div className="contenedor-header">
          <Logo />
          {content}
        </div>
      </header>
    </>
  );
}
export default Header;
