import React, { useState } from "react";
import TextArea from "../TextArea/TextArea";
import { validateName } from "../../utils/validate";
import "./text-tarea.scoped.css";

const TextareaAdmon = ({ titulo, name, setData, value, validar }) => {
  const [contenido, setContenido] = useState("");

  const onChange = (e) => {
    // const _name = e.currentTarget.name;
    // const _value = e.currentTarget.value;
    // console.log(_name, _value);
    // setData((data) => ({
    //   ...data,
    //   [_name]: _value,
    // }));
  };

  const onError = () => {};

  return (
    <div className="contenedorPoliticasAdmon">
      <h3>{titulo} </h3>
      <p>Descripción</p>
      <TextArea
        placeholder="Escribir aquí"
        className="descripcionInput"
        name="descripcion"
        id="descripcion"
        required
        update={setContenido}
        validar={validar}
        validate={validateName}
        errorMessage={"Ingrese una descripción válida"}
        emptyMessage={"Se requiere una descripción para el producto"}
        onChange={onChange}
        onError={onError}
      />
    </div>
  );
};

export default TextareaAdmon;
