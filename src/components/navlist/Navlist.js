import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import {Home} from '../home/Home';
import {Dwarves} from '../dwarves/Dwarves';
import {Elves} from '../elves/Elves';
import {Dragons} from '../dragons/Dragons';


export class Navlist extends Component {
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-lg navbarcolor">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active mr-3">
                <NavLink className="list" to="/">Home</NavLink>
              </li>
              <li className="nav-item active mr-3 list">
                <NavLink className="list" to="/Dwarves">Dwarves</NavLink>
              </li>
              <li className="nav-item active mr-3 list">
                <NavLink className="list" to="/Elves">Elves</NavLink>
              </li>
              <li className="nav-item active mr-3 list">
                <NavLink className="list" to="/Dragons">Dragons</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/Dwarves" component={Dwarves} />
        <Route path="/Elves" component={Elves} />
        <Route path="/Dragons" component={Dragons} />
      </>
    )
  }
}
