import { useState, useEffect } from "react";

// Cada que cambia la propiedad value, se encarga de ejecutar el método validate
// Cada que cambia el disparador validar también valida
// retorna un Boolean indicando si el campor es erroneo (true) o válido (false)

const useValidate = (value, validate, validar) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (validate) {
      const resultado = validate(value);
      setError(!resultado);
    }
  }, [value, validar]);

  return [error];
};

export default useValidate;
