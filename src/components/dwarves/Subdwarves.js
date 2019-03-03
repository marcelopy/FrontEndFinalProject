import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import dwarves from '../images/dwarves.jpg';

export class Subdwarves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating dwarves">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves/demolisher">Demolisher</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves/bomber">Bomber</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dwarves/tinkerer">Tinkerer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/dwarves/demolisher" render={()=>
          <>
            <div className="infocard dwarves text-center">
              <h3>Demolisher</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100%" src={dwarves}/>
              <p>The best there is for a quick boom!</p>
            </div>
          </>
        }/>
        <Route path="/dwarves/bomber" render={()=>
          <>
            <div className="infocard dwarves text-center">
              <h3>Bomber</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100%" src={dwarves}/>
              <p>The best there is for a quick boom!  Find more info in the next mountain, to the left</p>


            </div>
          </>
        }/>
        <Route path="/dwarves/tinkerer" render={()=>
          <>
            <div className="infocard dwarves text-center">
              <h3>Tinkerer</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100%" src={dwarves}/>
              <p>The best there is for a quick boom!</p>
            </div>
          </>
        }/>
        <Route path="/dwarves/bomber/bombermoreinfo" render={()=>
          <>
            <div className="card text-center dwarves moreinfocard">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </>
          } />
      </>
    )
  }
}
