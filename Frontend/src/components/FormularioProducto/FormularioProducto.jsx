import { useState, useEffect } from "react";
import CustomSelectReserva from "../CustomSelectReserva/CustomSelectReserva";
import { validateName } from "../../utils/validate";
import Input from "../Input/Input";
import "./formulario-producto.scoped.css";
import TextArea from "../TextArea/TextArea";

export default function FormularioProducto({
  ciudades,
  categorias,
  validar,
  getData,
}) {
  const [nombre, setNombre] = useState({});
  const [direccion, setDireccion] = useState({});
  const [categoria, setCategoria] = useState({});
  const [ciudad, setCiudad] = useState({});
  const [descripcion, setDescripcion] = useState({});

  useEffect(() => {
    if (validar > 0) {
      getData({
        nombre,
        direccion,
        categoria,
        ciudad,
        descripcion,
      });
    }
  }, [validar]);

  const onChange = () => {
    //setShowError(false);
    //setFormError(false);
  };
  const onError = () => {};

  const onValidate = (nombre, value, error) => {
    console.log(nombre + "," + value + "," + error);
  };

  return (
    <div className="contenedorFormularioProducto">
      <form>
        <div className="formulario1">
          <div className="tituloinput">
            <h3>Nombre producto</h3>
            <Input
              // title="Nombre producto"
              placeholder="Audi R8"
              className="nombreInput"
              name="nombre"
              id="nombre"
              required
              update={setNombre}
              validar={validar}
              onValidate={onValidate}
              validate={validateName}
              errorMessage={"Ingrese un nombre válido"}
              emptyMessage={"Se requiere un nombre para el producto"}
              onChange={onChange}
              onError={onError}
            />
          </div>
          <div className="tituloinput">
            <h3>Dirección</h3>
            <Input
              // title="Dirección"
              placeholder="Av Colón 1643"
              className="direccionInput"
              name="direccion"
              id="direccion"
              required
              validar={validar}
              update={setDireccion}
              onValidate={onValidate}
              validate={validateName}
              errorMessage={"Ingrese una dirección válida"}
              emptyMessage={"Se requiere una dirección para el producto"}
              onChange={onChange}
              onError={onError}
            />
          </div>
        </div>
        <div className="formulario2">
          <div className="tituloinputSelect">
            <h3>Categoría</h3>
            <CustomSelectReserva
              errorMessage={"Seleccione una categoría"}
              emptyMessage={"Seleccione una categoría"}
              update={setCategoria}
              options={categorias}
              placeholder="Auto"
              validar={validar}
              onError={onError}
            />
          </div>
          <div className="tituloinputSelect">
            <h3>Ciudad</h3>
            <CustomSelectReserva
              errorMessage={"Seleccione una ciudad"}
              emptyMessage={"Seleccione una ciudad"}
              update={setCiudad}
              options={ciudades}
              placeholder="Ciudad"
              validar={validar}
              onError={onError}
            />
          </div>
        </div>
        <div className="formulario3">
          <div className="tituloinput">
            <h3>Descripción</h3>
            <TextArea
              placeholder="Escribir aquí"
              className="descripcionInput"
              name="descripcion"
              id="descripcion"
              required
              maxLength={250}
              validar={validar}
              update={setDescripcion}
              validate={validateName}
              errorMessage={"Ingrese una descripción válida"}
              emptyMessage={"Se requiere una descripción para el producto"}
              onChange={onChange}
              onError={onError}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
