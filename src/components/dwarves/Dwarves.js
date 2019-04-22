import React, {Component} from 'react';
import {SubdwarvesContainer} from './Subdwarves';
import dwarvesimg from '../images/dwarves.jpg';
import {BasketContainer} from'../basket/basket';

export class Dwarves extends Component {
  render(){
    return(
      <>
      <div className="text-center dwarves containerheight">
          <h1>Dwarves!</h1>
          <img alt='' className="rounded-circle w-50 m-2" src={dwarvesimg}/>
          <p className="rowheight">Get the toughest, rockiest, most inhebriated fighters of them all!</p>
          <p className="rowheight">Because nothing shows more love than tough love.</p>
      </div>
      <SubdwarvesContainer />
      <BasketContainer/>
      </>
    )
  }
}
