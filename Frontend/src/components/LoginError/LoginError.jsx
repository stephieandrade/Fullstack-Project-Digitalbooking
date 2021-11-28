import Icono from "../Icono/Icono";
import "./login-error.scoped.css";

export default function LoginError({ className, children }) {
  return (
    <>
      <div className="contenedor">
        <Icono className={`${className}`} />
        <p className="message">{children}</p>
      </div>
    </>
  );
}
