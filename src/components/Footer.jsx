import React from "react";
import Logo from "../../src/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div> <img src={Logo} alt="" />
      </div>
      <div>
        <p className="oxe-logo-footer">OXE FALÚ</p>
        <div className="oxe-falu">

          <a href="https://www.facebook.com/profile.php?id=61561487667054"><img src="facebook.png" alt="facebook" /></a>
          <div className="gm">
            <img src="gmail.png" alt="" /><p>oxefalu@gmail.com</p>
          </div>
          <a href="https://www.instagram.com/oxefalu/"><img src="instagram.png" alt="" /></a>
        </div>

      </div>
      <div>
        <span>
          &#169; Desarrollado por AgileSoftware 2024
        </span>
      </div>

    </footer>
  );
};

export default Footer;