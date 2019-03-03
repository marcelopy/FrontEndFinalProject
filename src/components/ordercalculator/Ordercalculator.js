import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {increaseCounter, decreaseCounter, toggleExpand, whatTitle} from '../../redux/redux';
import {connect} from 'react-redux';

class OrderCalculator extends Component{
  render(){
    return(
      <>
      <hr/>
      <button onClick={this.props.decreaseCounter} type="button" className="btn-secondary buttontext">-</button>
      <span className="mx-5">{this.props.counter}</span>
      <button onClick={this.props.increaseCounter} type="button" className="btn-secondary buttontext">+</button>
      <p><button onClick={this.props.whatTitle} type="button" className="btn btn-info">To Basket</button></p>
      </>
    )
  }
}




const mapStateToProps = state =>{
  return{
    counter:state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: (ev) => dispatch(increaseCounter(ev)),
    decreaseCounter: (ev) => dispatch(decreaseCounter(ev)),
    toggleExpand:(ev)=>dispatch(toggleExpand(ev)),
    whatTitle:(ev)=>dispatch(whatTitle(ev))
  }
}
export const OrderContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderContainer))
