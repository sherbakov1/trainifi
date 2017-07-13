import React from 'react';
import './styles/Train.css';

const Train = ({train, composition}) =>
  <div className='list-element'>
    <div className={`list-element-h train-found-${composition}`}>
      <span className='list-element-number'>{`${train.trainNumber}${train.trainType}`}</span>
      <span className='list-element-route'>{composition && `${train.journey.beginTimeTableRow.stationShortCode} - ${train.journey.endTimeTableRow.stationShortCode}`}</span>
    </div>
    <div className='list-element-info'>
      {composition ?
        <ul className={`list-ul running-${train.runningCurrently}`}>
          <li className='train-date'>{train.departureDate}</li>
          <li><span>Locomotive: </span>{train.journey.locomotives.join(', ')}</li>
          <li><span>Wagons: </span>{train.journey.wagons.join(', ')}</li>
          <li><span>Max speed: </span>{train.journey.maximumSpeed}</li>
          <li><span>Length: </span>{train.journey.totalLength}</li>
        </ul>
        :
        <ul className={`list-ul running-no-composition`}>
          <li className='train-date'>{train.departureDate}</li>
          <li className='train-no-composition'>{train.journey}</li>
        </ul>
      }
    </div>
  </div>

export default Train;
