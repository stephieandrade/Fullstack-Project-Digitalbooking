import React, { useState, useEffect } from "react";
import { validateName } from "../../utils/validate";
import TextArea from "../TextArea/TextArea";
import "./politicas-admon.scoped.css";

const normas = "Normas de la casa ";
const salud = "Salud y seguridad";
const cancelacion = "Politica de cancelación";
const PoliticasAdmon = ({ validar, getData }) => {
  const [normas, setNormas] = useState({});
  const [salud, setSalud] = useState({});
  const [cancelacion, setCancelacion] = useState({});

  useEffect(() => {
    if (validar > 0) {
      getData({
        normas,
        saludYSeguridad: salud,
        politicaCancelacion: cancelacion,
      });
    }
  }, [validar]);

  return (
    <div>
      <h3 className="politicasAdmon">Políticas del producto</h3>
      <div className="contenedorPoliticasAdmon">
        <div className="normas">
          <h3>Normas del auto</h3>
          <TextArea
            placeholder="Escribir aquí"
            className="descripcionInput"
            name="normas"
            id="normas"
            required
            validar={validar}
            update={setNormas}
            validate={validateName}
            errorMessage={"Ingrese una descripción válida"}
            emptyMessage={"Se requiere una descripción para el producto"}
            onError={() => {}}
            onChange={() => {}}
          />
        </div>
        <div className="salud">
          <h3>Salud y seguridad</h3>
          <TextArea
            placeholder="Escribir aquí"
            className="descripcionInput"
            name="saludYSeguridad"
            id="saludYSeguridad"
            required
            validar={validar}
            update={setSalud}
            validate={validateName}
            errorMessage={"Ingrese una descripción válida"}
            emptyMessage={"Se requiere una descripción para el producto"}
            onError={() => {}}
            onChange={() => {}}
          />
        </div>
        <div className="cancelacion">
          <h3>Política de cancelación</h3>
          <TextArea
            placeholder="Escribir aquí"
            className="descripcionInput"
            name="politicaCancelacion"
            id="politicaCancelacion"
            required
            validar={validar}
            update={setCancelacion}
            validate={validateName}
            errorMessage={"Ingrese una descripción válida"}
            emptyMessage={"Se requiere una descripción para el producto"}
            onError={() => {}}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default PoliticasAdmon;
