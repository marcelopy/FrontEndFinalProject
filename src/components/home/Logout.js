import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

export class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {toHome: false};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({toHome: true});
    }, 5000)
  }

  componentWillUmount() {
    this.setState({toHome: false});
  }

  render() {
    return (
      <>
        <h2 className="show">
        <p>We are processing your order</p>
        <p>In 5 seconds you will be redirected to our Home page</p>
        <p>Thank you for shopping with us!</p>
        </h2>
        {this.state.toHome && <Redirect to="/" />}
      </>
    )
  }
}
