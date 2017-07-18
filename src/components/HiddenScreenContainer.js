import { connect } from 'react-redux';
import HiddenScreen from './HiddenScreen';

const mapStateToProps = (state) => {
  return {
    station: state.trains.station,
    didFetch: state.trains.didFetch,
    trains: state.trains.trains,
    error: state.trains.error
  }
}

const HiddenScreenContainer = connect(
  mapStateToProps
)(HiddenScreen)

export default HiddenScreenContainer;
