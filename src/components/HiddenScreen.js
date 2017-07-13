import React from 'react';
import Station from './Station';
import Line from './Line';
import Logo from './Logo';
import Train from './Train';
import FormContainer from './FormContainer';
import './styles/HiddenScreen.css';

const HiddenScreen = ({station, didFetch, trains}) => {
    return (
          <div className={`container-hidden visible-${didFetch}`}>
            <div className='container-top'>
              <div className='container-1140px'>
                <Logo />
                <FormContainer />
              </div>
            </div>
            <Station station={station} />
            <Line />
            <div className='list'>
              {trains.map(train => {
              return train.journey.hasOwnProperty('beginTimeTableRow') ?
                <Train train={train} composition={true} key={train.id} /> :
                <Train train={train} composition={false} key={train.id} />
              })}
            </div>
          </div>
    )
  }

  export default HiddenScreen;
