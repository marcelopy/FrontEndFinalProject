import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import dwarves from '../images/dwarves.jpg';
import {Subdwarves} from './Subdwarves';

export class Dwarves extends Component{
  render(){
    return(
      <>
        <div className="text-center">
          <h1>Dwarves!</h1>
          <img  className="rounded-circle w-50 m-3" src={dwarves}/>
          <p className="rowheight">Get the toughest, rockiest, most inhebriated fighters of them all!</p>
          <p className="rowheight">Because nothing shows more love than tough love</p>
        </div>
        <Subdwarves />
      </>
    )
  }
}
