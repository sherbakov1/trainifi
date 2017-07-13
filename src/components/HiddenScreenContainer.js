import { connect } from 'react-redux';
import HiddenScreen from './HiddenScreen';

const mapStateToProps = (state) => {
  return {
    station: state.trains.station,
    didFetch: state.trains.didFetch,
    trains: state.trains.trains
  }
}

const HiddenScreenContainer = connect(
  mapStateToProps
)(HiddenScreen)

export default HiddenScreenContainer;
