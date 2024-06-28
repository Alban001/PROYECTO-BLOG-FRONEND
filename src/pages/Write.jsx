import React, { useState,useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {

  const state = useLocation().state;
  
  const [historia, setValue] = useState(state?.historia || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

 

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post('/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            historia: historia,
            img: file ? imgUrl : "",
            cat,
          })
        : await axios.post(`/posts/`, {
            title,
            historia: historia,
            img: file ? imgUrl : "",
            cat,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
        
            className="editor"
            theme="snow"
            value={historia}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Estado: </b> Borrador
          </span>
          <span>
            <b>Visibilidad: </b> Público
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Subir imágen
          </label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoría</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "poemas"}
              name="cat"
              value="poemas"
              id="poemas"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="poemas">Poemas</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "erotica"}
              name="cat"
              value="erotica"
              id="erotica"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="erotica">Erótica</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cuentos"}
              name="cat"
              value="cuentos"
              id="cuentos"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cuentos">Cuentos</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "meditacion"}
              name="cat"
              value="meditacion"
              id="meditacion"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="meditacion">Meditación</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "motivacion"}
              name="cat"
              value="motivacion"
              id="motivacion"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="motivacion">Motivación</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "punto"}
              name="cat"
              value="punto"
              id="punto"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="punto">Jconpunto</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;