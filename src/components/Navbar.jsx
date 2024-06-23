import {React, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/modalContext";
import Logo from "../img/logo.png";
import Pencil from "../img/pencil.png";
import Modal from "./Modal";
import Cookies from "js-cookie";
import { AuthContext } from "../context/authContext";



const Navbar = () => {
 
  const { isModalOpen, showModal, hideModal } = useModal();
  
  const [open, setOpen] = useState(false)


  const handleButton =()=>{
    
      return setOpen(!open)
  }

  
  
  useEffect(() => {
    const hasModalBeenShown = Cookies.get('modalShown');
    if (!hasModalBeenShown) {
      showModal();
    }
  }, [showModal]);

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      {/*
          HAMBURGER PHONE
      */}

<nav class="hamburger">
        <div className="brand-title"><img src="/logo.png" alt="" /></div>
        
        <ul className="navbar-links" id="js-menu" style={{display: open ? 'block' : 'none' }}>
            <li>
            <Link  to="/?cat=motivacion" onClick={handleButton}>
              <h6>Motivación</h6>
            </Link>
            </li>
            <li>
            <Link  to="/?cat=poemas" onClick={handleButton}>
              <h6>Poemas</h6>
            </Link>
            </li>
            <li>
            <Link  to="/?cat=erotica" onClick={handleButton}>
              <h6>Erótica</h6>
            </Link>
            </li>
            <li>
            <Link  to="/?cat=meditacion" onClick={handleButton}>
              <h6>Meditación</h6>
            </Link>
            </li>
            <li>
            <Link  to="/?cat=cuentos" onClick={handleButton}>
              <h6>Cuentos</h6>
            </Link>
            </li>
            <li>
            <Link  to="/?cat=punto" onClick={handleButton}>
              <h6>Jconpunto</h6>
            </Link>
            </li>
            <li>
            <Link  to="/write" onClick={handleButton}>
              <h6>Escribir nuevo</h6>
            </Link>
            </li>
        </ul>
        <div className="navbar-toggle" id="js-navbar-toggle" onClick={handleButton}>
              {open ?  <div>&#x2715;</div> : <div>&#9776;</div>}
        </div>
    </nav>

      {/*
          NAVBAR NORMAL
      */}


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
            <Link className="link" to="/?cat=punto" activeClassName="active">
            <h6 className="jconpunto">Jconpunto</h6>
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