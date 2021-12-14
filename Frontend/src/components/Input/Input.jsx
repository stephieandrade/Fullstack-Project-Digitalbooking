import { useEffect, cloneElement, useState } from "react";
import useInput from "../../hooks/useInput";
import "./input.scoped.css";

export default function Input(props) {
  // Extraemos las propiedades que no queremos en el <input> (DOM)
  const {
    validate,
    errorMessage,
    emptyMessage,
    title,
    type,
    onChange,
    onError,
    update,
    children,
    validar,
    onValidate,
    ...data
  } = props;
  // Propiedas que quedan en data se pasan al DOM
  const { className, id, required } = data;

  const [show, setShow] = useState(false);

  const { handleChange, value, showError, error } = useInput(validate, validar);

  useEffect(() => {
    if (showError) onError();
  }, [showError]);

  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (update) update({ value, error });
  }, [value, error]);

  return (
    <>
      <div className={`input ${className}`}>
        <label htmlFor={id}>{title}</label>
        <div className="contenedor-input">
          <input
            {...data}
            type={`${show ? "text" : type}`}
            value={value}
            onChange={(e) => {
              handleChange(e);
              onChange(e);
            }}
          />
          {children &&
            cloneElement(children, {
              onClick: handleShow,
              show,
            })}
        </div>
        <span className={`error ${showError ? "" : "hidden"}`}>
          {value === "" && required ? emptyMessage : errorMessage}
        </span>
      </div>
    </>
  );
}
