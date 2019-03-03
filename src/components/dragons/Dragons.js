import React, {Component} from 'react';
import dragon from '../images/dragon.jpg';
import {Subdragons} from './Subdragons';
// import {Basket} from '../basket/basket.js'

export class Dragons extends Component{
  render(){
    return(
      <>
        <div className="text-center">
          <h1>Dragons!</h1>
          <img alt='' className="rounded-circle w-50 m-3" src={dragon}/>
          <p className="rowheight">Should we say anything more? (no, seriously)</p>
          <p className="rowheight">Ultimate weapon, all terrain fighter. But it will cost you. Dearly.</p>
        </div>
        <Subdragons />
      </>
    )
  }
}
