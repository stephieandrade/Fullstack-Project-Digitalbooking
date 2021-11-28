import "./not-found.scoped.css";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <p>Ruta no encontrada</p>
      <Link to="/">Ir a home</Link>
    </>
  );
}
