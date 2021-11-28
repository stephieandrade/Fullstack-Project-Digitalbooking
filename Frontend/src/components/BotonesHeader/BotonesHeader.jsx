import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Boton from "../Boton/Boton";
import "./botones-header.scoped.css";

function BotonesHeader() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <div className="botones-header">
        <Boton
          link="/registro"
          nombre="Crear cuenta"
          className={`button  ${
            location.pathname === "/registro" ? "hidden" : ""
          }`}
        />

        <Boton
          link="/login"
          nombre="Iniciar sesión"
          className={`button  ${
            location.pathname === "/login" ? "hidden" : ""
          }`}
        />
      </div>
    </>
  );
}
export default BotonesHeader;
