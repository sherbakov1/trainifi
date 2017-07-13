import { connect } from 'react-redux';
import { selectStation, fetchTrains } from './redux';
import Form from './Form';

const mapStateToProps = (state) => {
  return {
    trains: state.trains,
    value: state.station
  }
}

const mapDispatchToProps = (dispatch, station) => {
  return {
    handleChange: (event) => {
      dispatch(selectStation(event.target.value))
    },
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(fetchTrains())
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer;
