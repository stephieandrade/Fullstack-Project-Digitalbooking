import { useState, useEffect } from "react";

// Cada que cambia la propiedad value, se encarga de ejecutar el método validate
// retorna un Boolean indicando si el campor es erroneo (true) o válido (false)

const useValidate = (value, validate) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (validate) {
      // Esto se llama con cada pulsación de tecla
      setError(!validate(value));
    }
  }, [value]);

  return [error];
};

export default useValidate;
