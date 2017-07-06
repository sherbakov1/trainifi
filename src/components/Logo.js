import React from 'react';
import './styles/Logo.css';

const Logo = ({size}) =>
  <div className={`logotype logotype_${size}`}>Traini<span>.</span>fi</div>

Logo.defaultProps = {
  size: 'small'
};

export default Logo;
