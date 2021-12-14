import React, { useState, useEffect, useRef } from "react";
import Icono from "../Icono/Icono";
import "./custom-select-home.scoped.css";

export default function CustomSelectHome({ setIdCiudad, children, options }) {
  const ref = useRef();
  const [selectedOption, setSelectedOption] = useState({
    value: -1,
    ciudad: "¿A dónde vamos?",
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (active && ref.current && !ref.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [active]);

  const handleClickOption = () => {
    setActive((active) => {
      return !active;
    });
  };
  const handleClickItem = (e) => {
    const value = e.currentTarget.id;
    const ciudad = e.currentTarget.querySelector("label").textContent;
    setActive(false);
    setSelectedOption({ value, ciudad });
    setIdCiudad(value);
  };

  return (
    <>
      <div className="wrapper" ref={ref}>
        <div className={`select_wrap ${active ? "active" : ""}`}>
          <ul
            className={`default_option ${
              selectedOption.value === -1 ? "light" : ""
            }`}
            onClick={handleClickOption}
          >
            <li>
              <div className="option">
                <Icono
                  className={`home buscador ${
                    selectedOption.value != -1 ? "seleccionado" : ""
                  } fas fa-map-marker-alt`}
                />
                <p>{selectedOption.ciudad}</p>
              </div>
            </li>
          </ul>
          <ul className="select_ul">
            {options.map((option, key) => {
              // return (
              //   <li id={option.ciudades_id} onClick={handleClickItem} key={key}>
              //     {React.Children.toArray(children)[key]}
              //   </li>
              // );
              return (
                <li id={option.ciudades_id} onClick={handleClickItem} key={key}>
                  <div className="list">
                    <Icono className="home options fas fa-map-marker-alt" />
                    <div className="options">
                      <label>{option.nombre}</label>
                      <p>{option.nombre_pais}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
