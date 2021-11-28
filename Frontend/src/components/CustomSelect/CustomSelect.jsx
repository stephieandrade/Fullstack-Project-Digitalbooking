import { useState } from "react";
import Select from "react-select";
import { css, cx } from "@emotion/css";
import "./custom-select.scoped.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        className={css`
          background-color: hotpink;
          font-size: 14px;
          font-family: "Roboto";
          border-radius: 5px;
          &:hover {
            color: pink;
          }
        `}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </>
  );
}
