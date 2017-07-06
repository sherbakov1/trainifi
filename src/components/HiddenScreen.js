import React, { Component } from 'react';
import Logo from './Logo';
import Station from './Station';
import Line from './Line';
import ListElement from './ListElement';
import FormContainer from './FormContainer';
import './styles/HiddenScreen.css';

export default class HiddenScreen extends Component {

  uniqueWagons(arr) {
    let obj = {};
    for(let i=0; i<arr.length; i++) {
      obj[arr[i]] = arr[i];
    }
    return Object.keys(obj).join(', ');
  }

  renderTrains(train) {
    const trainData = train.journeySections;
    const trainSchedule = `${trainData.beginTimeTableRow.stationShortCode} - ${trainData.endTimeTableRow.stationShortCode}`;
    const loco = trainData.locomotives[0].locomotiveType;
    const locoPowerType = trainData.locomotives[0].powerType;
    const speed = `${trainData.maximumSpeed} km/h`;
    const length = `${trainData.totalLength} m`;
    const wagons = this.uniqueWagons(trainData.wagons.map(wagon => wagon.wagonType));

    return (
      <ListElement
        key={train.trainNumber+train.trainType+train.departureDate}
        number={train.trainNumber}
        route={trainSchedule}
        loco={`${loco} ${locoPowerType}`}
        speed={speed}
        length={length}
        wagons={wagons}
        status={train.runningCurrently ? 'train-running' : 'train-not-running'}
        />
    )
  }

  render() {
    return (
          <div className={`container-hidden visible-${this.props.visible}`}>
            <div className='container-top'>
              <div className='container-1140px'>
                <Logo />
                <FormContainer getTrains={this.props.getTrains}/>
              </div>
            </div>
            <Station station={this.props.station}/>
            <Line />
            <div className='list'>
              { this.props.trains == null ? <p>Loading</p> :
                this.props.trains.length === 0 ? <p>Check station name</p> :
                this.props.trains.map(item => this.renderTrains(item))
              }
            </div>
          </div>
    )
  }
}
