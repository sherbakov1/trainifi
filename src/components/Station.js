import React from 'react';
import './styles/Station.css';

const Station = ({station}) =>
<div className='station'>
  <h1>Station: <span>{station}</span></h1>
</div>

export default Station;
