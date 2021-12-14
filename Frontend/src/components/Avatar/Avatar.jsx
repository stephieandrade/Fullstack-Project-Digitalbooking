import { useContext } from "react";
import AvatarInitials from "../AvatarInitials/AvatarInitials";
import { Contexto } from "../Contexto/Contexto";
import { useHistory } from "react-router";
import AdminLink from "../AdminLink/AdminLink";
import "./avatar.scoped.css";

const Avatar = ({ className }) => {
  const { estado, setEstado } = useContext(Contexto);
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("jwt");
    setEstado({ session: {} });
    history.push("/");
  };
  return (
    <>
      {estado?.session?.roles &&
        estado.session.roles[0].authority === "ROLE_ADMIN" && <AdminLink />}

      <div className={`avatar ${className}`}>
        <div className="close-session">
          <p onClick={handleClick}>X</p>
        </div>
        <div className="contenedor">
          {estado.session && (
            <AvatarInitials name={estado.session.nombreCompleto} />
          )}
          <div className="texto">
            <p className="saludo">Hola,</p>
            {estado.session && (
              <p className="nombre">{estado.session.nombreCompleto}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
