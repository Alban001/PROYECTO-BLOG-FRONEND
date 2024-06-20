import { useLocation } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {

  const history = useLocation()
  const goBack = () => {
    history.goBack()
  }
    if (!isOpen) return null;
  
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
          <h2>Aviso</h2>
          <p>Este sitio contiene contenido para adultos, y puede ser inapropiado para algunos espectadores. Se recomienda discreción</p>
          <div className="button-content">
                  <button onClick={goBack}>Regresar</button><button onClick={onClose}>Si, soy mayor de 18 años o más</button>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;