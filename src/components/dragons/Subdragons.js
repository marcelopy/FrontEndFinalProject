import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import dragons from '../images/dragon.jpg'

export class Subdragons extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating dragons">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons/thunderstorm">Thunderstorm</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons/nihilist">Nihilist</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dragons/bob">Sons of Uncle Bob</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/dragons/thunderstorm" render={()=>
          <>
            <div className="infocard dragons text-center">
              <h3>Thunderstorm</h3>
              <img  alt='' className="img-thumbnail img-fluid max-width:100%" src={dragons}/>
              <p>The best there is for a quick boom!</p>
            </div>
          </>
        }/>
        <Route path="/dragons/nihilist" render={()=>
          <>
            <div className="infocard dragons text-center">
              <h3>Nihilist</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100%" src={dragons}/>
              <p>The best there is for a quick boom!</p>
              <button type="button" className="btn-warning buttontext">+</button>
              <span className="mx-5">7</span>
              <button type="button" className="btn-warning buttontext">-</button>
            </div>
          </>
        }/>
        <Route path="/dragons/bob" render={()=>
          <>
            <div className="infocard dragons text-center">
              <h3>Sons of Uncle Bob</h3>
              <img  alt='' className="img-thumbnail img-fluid max-width:100%" src={dragons}/>
              <p>The best there is for a quick boom!</p>
            </div>
          </>
        }/>
      </>
    )
  }
}
