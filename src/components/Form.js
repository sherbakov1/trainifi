import React from 'react';
import './styles/Form.css';

const Form = ({handleChange, value, handleSubmit}) =>
  <form className="form" onSubmit={handleSubmit}>
    <input
      className="input"
      type="text"
      onChange={handleChange}
      value={value}
      placeholder="Station shortcode"
    />
    <button className="button">Search</button>
  </form>

export default Form;
