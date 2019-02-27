import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import dragon from '../images/dragon.jpg';
import {Subdragons} from './Subdragons';

export class Dragons extends Component{
  render(){
    return(
      <>
        <div className="text-center">
          <h1>Dragons!</h1>
          <img  className="rounded-circle w-50 m-3" src={dragon}/>
          <p className="rowheight">Should we say anything more? (no, seriously)</p>
          <p className="rowheight">Ultimate weapon, all terrain fighter. But it will cost you. Dearly.</p>
        </div>
        <Subdragons />
      </>
    )
  }
}
