import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export class Navlist extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves">Dwarves</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves">Elves</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons">Dragons</NavLink>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
