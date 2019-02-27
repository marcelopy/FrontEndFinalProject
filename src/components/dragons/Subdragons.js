import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

export class Subdragons extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating dragons">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons/hi">Thunderstorm</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons/hi">Nihilist</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons/hi">Sons of Uncle Bob</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/dragons/hi" render={()=><h1>Hello</h1>}/>
      </>
    )
  }
}
