import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import Pencil from "../img/pencil.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=motivacion">
            <h6>Motivacion</h6>
          </Link>
          <Link className="link" to="/?cat=poemas">
            <h6>Poemas</h6>
          </Link>
          <Link className="link" to="/?cat=erotica">
            <h6>Erótica</h6>
          </Link>
          <Link className="link" to="/?cat=cuentos">
            <h6>Cuentos</h6>
          </Link>
          <Link className="link" to="/?cat=meditacion">
            <h6>Meditación</h6>
          </Link>
          <span className="username">{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Cerrar Sesión</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
            <img src={Pencil} alt="Escribir" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;