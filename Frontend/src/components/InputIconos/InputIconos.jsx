import { useState, useEffect } from "react";
import Input from "../Input/Input";
import { validateName } from "../../utils/validate";

import "./input-iconos.scoped.css";
export default function InputIconos({
  handleRemove,
  handleAdd,
  handleChange,
  total,
  index,
  elem,
  validar,
  getData,
}) {
  // Inidica el tipo de boton a visualizar (agregar, remover)
  const [type, setType] = useState("+");

  const [nombre, setNombre] = useState({});
  const [icono, setIcono] = useState({});

  // Cuando el total de inputs cambia, se actualiza el icono
  useEffect(() => {
    console.log(index, total);
    setType(index === total - 1 ? "+" : "-");
  }, [total]);

  // Al hacer click,  dependiendo del icono actual invoca la correspondiente funcion en el padre
  const onClick = () => {
    if (type === "+") {
      handleAdd();
    } else {
      handleRemove(elem.id);
    }
  };
  useEffect(() => {
    const error = nombre.error || icono.error;
    if (validar > 0) {
      getData({ error, index, nombre: nombre.value, icono: icono.value });
    }
  }, [validar]);

  const onChange = (e) => {
    // Crea un objeto con clave valor, según el name y value del input actual
    const values = { [e.currentTarget.name]: e.currentTarget.value };
    //  Conservamos el id, pero sobreescribimos las propiedades nombre, icono cuando hay pulsación de teclas
    handleChange({ ...elem, ...values });
  };

  // const onChange = () => {
  //   setFormError(false);
  // };
  const onError = () => {
    //setFormError(true);
  };

  return (
    <div className="atributos">
      <div className="contenedorBloque">
        <div className="contenedorFormularios">
          <div className="atributoForm">
            <Input
              title="Nombre"
              placeholder="Texto del atributo"
              className="nombAtributo"
              name="nombre"
              id="nombre"
              required
              update={setNombre}
              validar={validar}
              validate={validateName}
              errorMessage={"Ingrese un nombre válido"}
              emptyMessage={"Se requiere un nombre para el producto"}
              onChange={onChange}
              onError={onError}
            />
          </div>
          <div className="iconoForm">
            <Input
              title="Icono"
              placeholder="Icono de fontawesome"
              className="iconoAtributo"
              name="icono"
              id="icono"
              required
              update={setIcono}
              validar={validar}
              validate={validateName}
              errorMessage={
                "Ingrese un nombre de icono válido para el atributo"
              }
              emptyMessage={"Se requiere un icono para el atributo"}
              onChange={onChange}
              onError={onError}
            />
          </div>
        </div>
        <div className="contenedorBoton">
          <div className={`boton ${type}`} onClick={onClick}>
            {type}
          </div>
        </div>
      </div>
    </div>
  );
}
