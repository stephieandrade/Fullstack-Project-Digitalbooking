import React, { useState, useEffect } from "react";
import InputImagenes from "../InputImagenes/InputImagenes";
import "./clonador-imagenes.scoped.css";

export default function ClonadorImagenes({ validar, getData }) {
  // Es importante que el primer id sea 0, y el valor de contador inicie en 1... para poder identificar cada objeto
  const [elems, setElems] = useState([]);
  const [contador, setContador] = useState(0);

  const [validar2, setValidar2] = useState(0);

  const [imagenes, setImagenes] = useState();

  useEffect(() => {
    if (validar > 0) {
      setImagenes([]);
      setValidar2((validar2) => validar2 + 1);
    }
  }, [validar]);

  useEffect(() => {
    if (imagenes && imagenes.length === contador) {
      getData({ imagenes });
    }
  }, [imagenes]);

  // Obtiene los datos de un InputIconos...
  const getDataInterno = (data) => {
    setImagenes((imagenes) => {
      return [...imagenes, data];
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
            <InputImagenes
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
