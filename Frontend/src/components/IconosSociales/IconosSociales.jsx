import Icono from "../Icono/Icono";
import "./iconos-sociales.scoped.css";

export default function IconosSociales({ className }) {
  return (
    <div className={`contenedor-logos ${className}`}>
      <a href="https://www.facebook.com">
        <Icono className={`fab fa-facebook ${className}`} />
      </a>
      <a href="https://www.linkedin.com">
        <Icono className={`fab fa-linkedin ${className}`} />
      </a>
      <a href="https://www.twitter.com">
        <Icono className={`fab fa-twitter ${className}`} />
      </a>
      <a href="https://www.instagram.com">
        <Icono className={`fab fa-instagram ${className}`} />
      </a>
    </div>
  );
}
