import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {ThunderstormContainer, NihilistContainer, BobContainer} from './dragonscards';


export class Subdragons extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm floating dragonsnav border border-dark rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link dragonstext" to="/dragons/thunderstorm">Thunderstorm</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dragonstext" to="/dragons/nihilist" >Nihilist</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dragonstext" to="/dragons/bob" >Bob</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/dragons/thunderstorm" component={ThunderstormContainer} />
        <Route path="/dragons/nihilist" component={NihilistContainer} />
        <Route path="/dragons/bob" component={BobContainer} />
      </>
    )
  }
}
