import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

export class Subdwarves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating dwarves">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves/hi">Demolisher</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves/hi">Bomber</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves/hi">Tinkerer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/dwarves/hi" render={()=><h1>Hello</h1>}/>
      </>
    )
  }
}
