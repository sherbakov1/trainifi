import React from 'react';
import './styles/Train.css';

const Train = ({train, composition}) =>
  <div className='train'>
    <div className={`train-header train-found-${composition}`}>
      <span className='train-number'>{`${train.trainNumber}${train.trainType}`}</span>
      <span className='train-route'>{composition && `${train.journey.beginTimeTableRow.stationShortCode} - ${train.journey.endTimeTableRow.stationShortCode}`}</span>
    </div>
    {composition ?
      <ul className={`train-info-list train-running-${train.runningCurrently}`}>
        <li className='train-date'>{train.departureDate}</li>
        <li><span>Locomotive: </span>{train.journey.locomotives.join(', ')}</li>
        <li><span>Wagons: </span>{train.journey.wagons.join(', ')}</li>
        <li><span>Max speed: </span>{train.journey.maximumSpeed}</li>
      <li><span>Length: </span>{train.journey.totalLength}</li>
      </ul>
      :
      <ul className={`train-info-list train-no-composition`}>
        <li className='train-date'>{train.departureDate}</li>
        <li>{train.journey}</li>
      </ul>
    }
  </div>

export default Train;
