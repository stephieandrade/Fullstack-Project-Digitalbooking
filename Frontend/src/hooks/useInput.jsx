import { useState } from "react";
import useValidate from "./useValidate";

const useInput = (validate) => {
  const [value, setValue] = useState("");

  const [error] = useValidate(value, validate);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    setShowError(false);
  };

  const handleBlur = (e) => {
    setShowError(error);
  };

  return { handleChange, handleBlur, value, showError };
};

export default useInput;
