import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import elves from '../images/elves2.jpg';
import {Subelves} from './Subelves';

export class Elves extends Component{
  render(){
    return(
      <>
        <div className="text-center">
          <h1>Elves!</h1>
          <img  className="rounded-circle w-25 m-2" src={elves}/>
          <p className="rowheight">Don't let them fool you... they look blasè, but they deliver!</p>
          <p className="rowheight">A well-placed deadly wound, albeit perfumed, can still kill you.</p>
        </div>
        <Subelves />
      </>
    )
  }
}
