import React, {Component} from 'react';
import basket from '../images/basket.jpg';
import {connect} from 'react-redux';
// import {submitcheckout} from '../../redux/redux';
import {Redirect, NavLink} from 'react-router-dom';



class Basket extends Component{
  render(){
    return(
      <>
      <div className="card infocardbasket">
        <img alt='' src={basket} className="card-img-top"/>
        <div className="card-body">
          <h4 className="card-title">Checkout Total:{this.props.totalbasket}</h4>
          <p className="card-text">{this.props.basket.map((item,index)=>{
                  return(
                    <li className="list" key={index}>{item.product}x{item.qty}</li>
                  )
          })}</p>
        </div>
          <NavLink className="nav-link" to="/logout" onClick={this.props.resetCounter}>Logout</NavLink>
      </div>
      </>
    )
  }
}
const mapStateToProps = state =>{
  return{
    basket:state.basket,
    itemSelected:state.itemSelected,
    totalbasket:state.totalbasket
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     submitcheckout: (ev) => dispatch(submitcheckout(ev)),
//   }
// }

export const BasketContainer = connect(mapStateToProps)(Basket)
