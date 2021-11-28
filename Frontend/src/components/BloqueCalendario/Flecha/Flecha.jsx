import "./flecha.scoped.css";
export default function Flecha({ direction, click }) {
  let flecha;
  if (direction === "right") {
    flecha = <span className="right">{">"}</span>;
  } else {
    flecha = <span className="left">{"<"}</span>;
  }

  return (
    <>
      <div className={`flecha ${direction}`} onClick={click}>
        {flecha}
      </div>
    </>
  );
}
