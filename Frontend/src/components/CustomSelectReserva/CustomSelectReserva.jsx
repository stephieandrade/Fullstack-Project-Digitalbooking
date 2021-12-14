import React, { useState, useRef, useEffect } from "react";
import Icono from "../Icono/Icono";
import "./custom-select-reserva.scoped.css";

export default function CustomSelectReserva({
  options,
  placeholder,
  errorMessage,
  emptyMessage,
  required,
  validar,
  onValidate,
  onError,
  update,
  ...data
}) {
  const ref = useRef();

  const [selectedOption, setSelectedOption] = useState({
    value: -1,
    text: placeholder,
  });

  useEffect(() => {
    if (update)
      update({ ...selectedOption, error: selectedOption.value === -1 });
  }, [selectedOption]);

  // Se da la orden de validar desde el componente padre
  useEffect(() => {
    if (validar) setShowError(selectedOption.value === -1 ? true : false);
  }, [validar]);

  const [active, setActive] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (active && ref.current && !ref.current.contains(e.target)) {
        setActive(false);
        const error = selectedOption.value === -1 ? true : false;
        setShowError(error);
        if (error) onError();
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
    const value = e.currentTarget.querySelector("p").getAttribute("value");
    const text = e.currentTarget.querySelector("p").textContent;
    setActive(false);
    setSelectedOption({ value, text });
    setShowError(false);
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
                <p>{selectedOption.text}</p>
                <Icono className="fas fa-chevron-down custom-select producto" />
              </div>
            </li>
          </ul>
          <ul className="select_ul">
            {options.map((option, key) => {
              return (
                <li id={option.id} onClick={handleClickItem} key={key}>
                  <div className="list">
                    <div className="options">
                      <p value={option.value}>{option.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <span className={`error ${showError ? "" : "hidden"}`}>
          {selectedOption.value === -1 && required
            ? emptyMessage
            : errorMessage}
        </span>
      </div>
    </>
  );
}
