import React, {Component} from 'react';
import basket from '../images/basket.jpg';
import {connect} from 'react-redux';
import {removeitem} from '../../redux/redux';
import {NavLink} from 'react-router-dom';



class Basket extends Component{

  render(){
    return(
      <>
      <div className="card infocardbasket">
        <img alt='' src={basket} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">Checkout Total:{this.props.totalbasket} GP</h5>
          <div className="card-text">{this.props.basket.map((item,index)=>{
                  return(

                    <div key={index}>
                  {item.qty>0 && <li className="list">{item.product}x{item.qty}={item.qty*item.price}GP<button title={item.product} price={item.price} identifier={item.identifier} className="closeX" onClick={this.props.removeitem}>x</button></li>}
                    </div>

                  )
          })}</div>
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
    totalbasket:state.totalbasket
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    removeitem: ev => dispatch(removeitem(ev))
  }
}

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket)
