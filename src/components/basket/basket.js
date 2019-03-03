import React, {Component} from 'react';
import basket from '../images/basket.jpg';


export class Basket extends Component{
  render(){
    return(
      <>
      <div className="card infocardbasket">
        <img src={basket} className="card-img-top"/>
        <div className="card-body">
          <h4 className="card-title">Checkout</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
      </>
    )
  }
}
