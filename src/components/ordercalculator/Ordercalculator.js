import React, {Component} from 'react';
// import {NavLink, Route} from 'react-router-dom';


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




const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({type:'INCREASECOUNTER'}),
    decreaseCounter: () => dispatch({type:'DECREASECOUNTER'}),
    toggleExpand:()=>dispatch({type:'TOGGLEEXPAND'}),
    whatTitle:(event)=>dispatch({type:'WHATTITLE'})
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    counter:state.counter,
    isExpanded:state.isExpanded,
    ownProps:state.ownProps
  }
}


export const CalculatorContainer= connect(mapStateToProps,mapDispatchToProps)(OrderCalculator);
