import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

export class Subelves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating elves">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/hi">Singer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/hi">Shadower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/hi">Restorer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/elves/hi" render={()=><h1>Hello</h1>}/>
      </>
    )
  }
}
