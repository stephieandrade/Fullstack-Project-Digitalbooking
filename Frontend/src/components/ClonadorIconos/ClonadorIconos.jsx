import React, { useState, useEffect } from "react";
import InputIconos from "../InputIconos/InputIconos";
import "./clonador-iconos.scoped.css";

export default function ClonadorIconos({ validar, getData }) {
  // Es importante que el primer id sea 0, y el valor de contador inicie en 1... para poder identificar cada objeto
  const [elems, setElems] = useState([]);
  const [contador, setContador] = useState(0);

  const [validar2, setValidar2] = useState(0);

  const [caracteristicas, setCaracteristicas] = useState();

  useEffect(() => {
    if (validar > 0) {
      setCaracteristicas([]);
      setValidar2((validar2) => validar2 + 1);
    }
  }, [validar]);

  useEffect(() => {
    if (caracteristicas && caracteristicas.length === contador) {
      getData({ caracteristicas });
    }
  }, [caracteristicas]);

  // Debe devolver el datos estructurado como un arreglo de objetos
  // [
  //   { nombre: "Nombre 1", icono: "value 1", error: false},
  //   { nombre: "Nombre 2", value: "value 2", error: false },
  // ];

  // Obtiene los datos de un InputIconos...
  const getDataInterno = (data) => {
    setCaracteristicas((caracteristicas) => {
      return [...caracteristicas, data];
    });
  };

  const handleAdd = (e) => {
    console.log("Add");
    // Al duplicar dejamos los elementos anteriores, y creamos un nuevo con el ID indicado por el contador
    setElems([...elems, { id: contador }]);
    setContador(contador + 1);
  };

  const handleRemove = (id) => {
    // Tenemos  que encontrar el ID del objeto a eliminar
    console.log("Remove ID ", id);
    setElems((elems) => {
      const items = elems.filter((elem) => {
        return elem.id !== id;
      });
      return items;
    });
  };

  const handleChange = (objeto) => {
    // Cuando un input cambia tenemos que saber cual fue basado en su id... aquel que cambia se mutan sus propiedades
    // los demás se dejan igual
    setElems((elems) => {
      const items = elems.map((elem) => {
        if (elem.id === objeto.id) elem = { ...elem, ...objeto };
        return elem;
      });
      return items;
    });
  };

  // al cargar el componente, montar el primer hijo
  useEffect(() => {
    handleAdd();
  }, []);

  return (
    <>
      <div className="clonador">
        {elems.map((elem, index, arr) => {
          return (
            <InputIconos
              total={arr.length}
              index={index}
              elem={elem}
              handleRemove={handleRemove}
              handleAdd={handleAdd}
              handleChange={handleChange}
              key={elem.id}
              validar={validar2}
              getData={getDataInterno}
            />
          );
        })}
      </div>
    </>
  );
}
