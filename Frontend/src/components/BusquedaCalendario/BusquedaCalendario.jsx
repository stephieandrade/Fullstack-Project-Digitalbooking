import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useMediaQuery } from "react-responsive";

import InputIcon from "react-multi-date-picker/components/input_icon";
import Boton from "../Boton/Boton";

import "./busqueda-calendario.css";

import gregorian_en_lowercase from "../Calendario/calendar.locale";

const BusquedaCalendario = ({ onChange }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const months = isTablet ? 2 : 1;

  const [shouldCloseCalendar, setShouldCloseCalendar] = useState(true);

  return (
    <DatePicker
      onClose={() => shouldCloseCalendar}
      locale={gregorian_en_lowercase}
      disableMonthPicker
      disableYearPicker
      // format="week day name: ddd (dddd), month name: MMM (MMMM) of YYYY"
      // formattingIgnoreList={["week", "day", "name", "month", "of"]}
      onChange={onChange}
      numberOfMonths={months}
      className="home"
      arrow={false}
      type={"input-icon"}
      placeholder="Check In - Check Out"
      range
      minDate={new DateObject().subtract(60, "days")}
      maxDate={new DateObject().add(364, "days")}
      mapDays={({ date, today }) => {
        let props = {};
        let result = date.toDays() - today.toDays();
        if (result < 0) props.disabled = true;

        // TODO: Agregar la lógica para verificar fechas ocupadas
        //let isWeekend = [0, 6].includes(date.weekDay.index);
        //if (isWeekend) props.disabled = true;

        return props;
      }}
    >
      {/* <Boton className="button2" nombre="Aplicar" /> */}
    </DatePicker>
  );
};

export default BusquedaCalendario;
