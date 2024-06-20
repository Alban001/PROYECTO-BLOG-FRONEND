import {React, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/modalContext";
import Logo from "../img/logo.png";
import Pencil from "../img/pencil.png";
import Modal from "./Modal";
import Cookies from "js-cookie";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
 
  const { isModalOpen, showModal, hideModal } = useModal();

  useEffect(() => {
    const hasModalBeenShown = Cookies.get('modalShown');
    if (!hasModalBeenShown) {
      showModal();
    }
  }, [showModal]);

  const { currentUser, logout } = useContext(AuthContext);
  return (
    <>
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
            <Link className="link" to="/?cat=erotica" >
                 <h6>Erótica</h6>
            </Link>
            <Link className="link" to="/?cat=cuentos">
              <h6>Cuentos</h6>
            </Link>
            <Link className="link" to="/?cat=meditacion">
              <h6>Meditación</h6>
            </Link>
            <Link className="link" to="/user">
              <span className="username">{currentUser?.username}</span>
            </Link>
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
        <Modal isOpen={isModalOpen} onClose={hideModal} />
      </div> 
    </>
  );
};

export default Navbar;