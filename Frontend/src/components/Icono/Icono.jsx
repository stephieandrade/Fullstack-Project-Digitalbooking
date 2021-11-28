import "./icono.scoped.css";
export default function Icono({
  onClick,
  style,
  className,
  showIcon,
  hideIcon,
  show,
}) {
  const icono = show ? showIcon : hideIcon;
  return (
    <span style={style} onClick={onClick}>
      <i className={`${className} ${icono}`} />
    </span>
  );
}
