import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useMediaQuery } from "react-responsive";
import "./busqueda-calendario.css";

import gregorian_en_lowercase from "../Calendario/calendar.locale";

const BusquedaCalendario = ({ onChange }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const months = isTablet ? 2 : 1;

  return (
    <DatePicker
      locale={gregorian_en_lowercase}
      disableMonthPicker
      disableYearPicker
      onChange={onChange}
      numberOfMonths={months}
      className="home"
      arrow={false}
      type={"input-icon"}
      range
      minDate={new DateObject().subtract(30, "days")}
      maxDate={new DateObject().add(30, "days")}
    />
  );
};

export default BusquedaCalendario;
