import React, { useState } from 'react'
import '../../src/style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      navigate("/login");
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  };

  
  return (
    <div className='auth'>
      <h1>Registro</h1>
      <form>
      <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="txt"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          autoComplete="on"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Registrarse</button>
        <p>Esto es un error!</p>
        <span>Tienes una cuenta ? <Link to="/login">Logeate</Link></span>
      </form>
    </div>
  )
}

export default Register