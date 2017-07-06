import React, { Component } from 'react';
import Form from './Form';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleClick(event) {
    event.preventDefault();
    this.props.getTrains(this.state.value.toUpperCase())
  }

  render() {
    return (
      <Form
        handleClick={this.handleClick.bind(this)}
        handleChange={this.handleChange.bind(this)}
        value={this.state.value}
        />
    )
  }
}
