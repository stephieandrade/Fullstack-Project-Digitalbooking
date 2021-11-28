import "./bloque-home.scoped.css";

export default function BloqueHome({ children, className }) {
  return (
    <div className={`bloque ${className}`}>
      <div className="contenedor-bloque">{children}</div>
    </div>
  );
}
