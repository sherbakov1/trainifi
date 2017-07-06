import React from 'react';
import './styles/ListElement.css';

const ListElement = ({number, route, loco, wagons, speed, length, status}) =>
  <div className='list-element'>
    <div className='list-element-h train-found'>
      <span className='list-element-number'>{number}</span>
      <span className='list-element-route'>{route}</span>
    </div>
    <div className='list-element-info'>
      <ul className={`list-ul ${status}`}>
        <li><span>Locomotive: </span>{loco}</li>
        <li><span>Wagons: </span>{wagons}</li>
        <li><span>Max speed: </span>{speed}</li>
        <li><span>Length: </span>{length}</li>
      </ul>
    </div>
  </div>

export default ListElement;
