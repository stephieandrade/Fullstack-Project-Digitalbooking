import { useState, useEffect } from "react";
import { validateName } from "../../utils/validate";
import Input from "../Input/Input";
import "./input-imagenes.scoped.css";
export default function InputImagenes({
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

  const [imagen, setImagen] = useState({});
  const [titulo, setTitulo] = useState({});

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
    const error = imagen.error || titulo.error;
    if (validar > 0) {
      getData({ error, index, imagen: imagen.value, titulo: titulo.value });
    }
  }, [validar]);

  const onChange = (e) => {
    // Crea un objeto con clave valor, según el name y value del input actual
    const values = { [e.currentTarget.name]: e.currentTarget.value };
    //  Conservamos el id, pero sobreescribimos las propiedades nombre, icono cuando hay pulsación de teclas
    handleChange({ ...elem, ...values });
  };

  const onError = () => {
    //setFormError(true);
  };

  return (
    <div className="contenedorBloque">
      <div className="contenedorFormularios">
        <div className="imagenForm">
          <Input
            title="URL"
            placeholder="Insertar URL de la imagen"
            className="nomburlImagenAtributo"
            name="imagen"
            id="imagen"
            required
            update={setImagen}
            validar={validar}
            validate={validateName}
            errorMessage={"Ingrese una URL válida"}
            emptyMessage={"Se requiere una URL para la imagen"}
            onChange={onChange}
            onError={onError}
          />
        </div>
        <div className="tituloForm">
          <Input
            title="Título"
            placeholder="Título de la imagen"
            className="tituloAtributo"
            name="titulo"
            id="titulo"
            required
            update={setTitulo}
            validar={validar}
            validate={validateName}
            errorMessage={"Ingrese un nombre de icono válido para el atributo"}
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
  );
}
