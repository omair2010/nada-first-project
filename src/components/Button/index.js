import React from 'react'
import './Button.css'
const Button = ({ color, nada }) => (
  <button onClick={nada} className={`btn-gradient ${color} mini`}>
    Ajouter
  </button>
);

export default Button;
