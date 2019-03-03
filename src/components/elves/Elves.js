import React, {Component} from 'react';
import elves from '../images/elves.jpg';
import {SubelvesContainer} from './Subelves';
// import {Basket} from '../basket/basket.js'

export class Elves extends Component{
  render(){
    return(
      <>
        <div className="text-center">
          <h1>Elves!</h1>
          <img alt='' className="rounded-circle w-50 m-3" src={elves}/>
          <p className="rowheight">Don't let them fool you... they look blasè, but they deliver!</p>
          <p className="rowheight">A well-placed deadly wound, albeit perfumed, can still kill you.</p>
        </div>
        <SubelvesContainer/>
      </>
    )
  }
}
