import React from 'react';
import './styles/Form.css';

const Form = ({handleClick, handleChange, value}) =>
  <form onSubmit={handleClick} className="form">
    <input className="input" type="text" onChange={handleChange} value={value} placeholder="Enter station shortcode" />
    <button className="button">Search</button>
  </form>

export default Form;
