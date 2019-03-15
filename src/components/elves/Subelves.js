import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {SingerContainer, ShadowerContainer, RestorerContainer} from './elvescards';


export class Subelves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm floating elvesnav border border-dark rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link elvestext" to="/elves/singer">Singer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link elvestext" to="/elves/shadower" >Shadower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link elvestext" to="/elves/restorer" >Restorer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/elves/singer" component={SingerContainer} />
        <Route path="/elves/shadower" component={ShadowerContainer} />
        <Route path="/elves/restorer" component={RestorerContainer} />
      </>
    )
  }
}
