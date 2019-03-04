import React, {Component} from 'react';
import basket from '../images/basket.jpg';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';



class Basket extends Component{
  render(){
    return(
      <>
      <div className="card infocardbasket">
        <img alt='' src={basket} className="card-img-top"/>
        <div className="card-body">
          <h4 className="card-title">Checkout Total:{this.props.totalMoney}</h4>
          <p className="card-text">{this.props.itemsInBasket.map((item,index)=>{
                  return(
                    <li className="list" key={index}>{this.props.itemSelected[index]}x{item}</li>
                  )
          })}</p>
        </div>
      </div>
      </>
    )
  }
}
const mapStateToProps = state =>{
  return{
    basketQuantity:state.basketQuantity,
    elves:state.elves,
    itemsInBasket:state.itemsInBasket,
    itemSelected:state.itemSelected,
    totalMoney:state.totalMoney
  }
}

export const BasketContainer = withRouter(connect(mapStateToProps)(Basket))
