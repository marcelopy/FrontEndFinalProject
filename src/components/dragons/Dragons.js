import React, {Component} from 'react';
import {SubdragonsContainer} from './Subdragons';
import dragonsimg from '../images/dragons.jpg'
import {BasketContainer} from'../basket/basket';

export class Dragons extends Component {
  render(){
    return(
      <>
      <div className="text-center dragons containerheight">
                <h1>Dragons!</h1>
                <img alt='' className="rounded-circle w-50 m-2" src={dragonsimg}/>
                <p className="rowheight">Should we say anything more? (no, seriously)</p>
                <p className="rowheight">Ultimate weapon, all terrain fighter. But it will cost you. Dearly.</p>
      </div>
      <SubdragonsContainer />
      <BasketContainer/>
      </>
    )
  }
}
