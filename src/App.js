import React, { Component } from 'react';
import Logo from './components/Logo';
import HiddenScreen from './components/HiddenScreen';
import FormContainer from './components/FormContainer';
import Footer from './components/Footer';
import api from './utils/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      station: null,
      trains: null
    }
  }

  getTrains(value) {
    api.fetchTrains(value)
    .then((trains) => {
      return api.fetchComposition(trains)
    })
    .then(trains => {
      setTimeout(()=>this.setState({
        trains,
        search: true,
        station: value
      }), 300)
    })
}

  render() {
    return (
        <div className="wrap">
          <div className="background"></div>
          <HiddenScreen
            visible={this.state.search}
            trains={this.state.trains}
            station={this.state.station}
            getTrains={this.getTrains.bind(this)}
          />
          <div className="container-main">
            <div className="container-content">
              <Logo size='big'/>
              <FormContainer getTrains={this.getTrains.bind(this)}/>
            </div>
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;
