import React from "react";
import Logo from "../../src/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
      &#169; Desarrollado por AgileSoftware 2024
      </span>
    </footer>
  );
};

export default Footer;