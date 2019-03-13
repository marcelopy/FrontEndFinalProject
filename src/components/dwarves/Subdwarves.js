import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {DemolisherContainer, BomberContainer, TinkererContainer} from './Dwarvescards';
export class Subdwarves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm floating dwarvesnav border border-dark rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link dwarvestext" to="/dwarves/demolisher">Demolisher</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dwarvestext" to="/dwarves/bomber">Bomber</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dwarvestext" to="/dwarves/tinkerer">Tinkerer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/dwarves/demolisher" component={DemolisherContainer} />
        <Route path="/dwarves/bomber" component={BomberContainer} />
        <Route path="/dwarves/tinkerer" component={TinkererContainer} />
      </>
    )
  }
}
