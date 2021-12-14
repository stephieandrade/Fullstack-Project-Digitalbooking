import { useState, useEffect } from "react";
import useValidate from "./useValidate";

const useInput = (validate, validar) => {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  // Nos indica el estado de error del componente
  const [error] = useValidate(value, validate, validar);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);

    // ocultar el error al escribir en el input
    setShowError(false);
  };

  // Cada que cambia el disparador es porq se quiere validar, mostrar error si lo hay
  useEffect(() => {
    if (validar > 0) if (error) setShowError(true);
  }, [validar]);

  return { handleChange, value, showError, error };
};

export default useInput;
