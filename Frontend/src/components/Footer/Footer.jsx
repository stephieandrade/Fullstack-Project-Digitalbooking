import React from "react";
import IconosSociales from "../IconosSociales/IconosSociales";
import "./footer.scoped.css";

const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <p>©2021 Digital Booking</p>
        <IconosSociales className="footer" />
      </div>
    </footer>
  );
};

export default Footer;
