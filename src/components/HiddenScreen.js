import React from 'react';
import Station from './Station';
import Line from './Line';
import Logo from './Logo';
import Train from './Train';
import FormContainer from './FormContainer';
import './styles/HiddenScreen.css';

function flexBoxLastRowFix(trainsMaxNumberinRow) {
  const hiddenTrains = [];
  for(let i=0; i<trainsMaxNumberinRow; i++) {
    hiddenTrains.push(<div key={i} className='train train-hidden'></div>)
  }
  return hiddenTrains;
}

const HiddenScreen = ({station, didFetch, trains, error}) => {
    return (
          <div className={`container-hidden visible-${didFetch}`}>
            <div className='container-top'>
              <div className='container-1140px'>
                <Logo />
                <FormContainer />
              </div>
            </div>
            <Station station={station ? station : '-'} />
            <Line />
            <div className='trains-list'>
              {error && <span className='error-message'>Oops! {error}</span>}
              {trains.map(train => {
              return train.journey.hasOwnProperty('beginTimeTableRow') ?
                <Train train={train} composition={true} key={train.id} /> :
                <Train train={train} composition={false} key={train.id} />
              })}
              {trains.length !== 0 && flexBoxLastRowFix(5)}
            </div>
          </div>
    )
  }

  export default HiddenScreen;
