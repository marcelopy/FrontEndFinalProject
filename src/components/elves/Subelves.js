import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {infoproducts} from '../infoproducts/infoproducts';
import {SingerContainer, ShadowerContainer, RestorerContainer} from './elvescards';
import {resetoptions} from '../../redux/redux';

class Subelves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm floating elvesnav border border-dark rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link elvestext" to="/elves/singer" identifier={infoproducts[3].identifier} onClick={this.props.resetoptions}>Singer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link elvestext" to="/elves/shadower" identifier={infoproducts[4].identifier} onClick={this.props.resetoptions}>Shadower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link elvestext" to="/elves/restorer" identifier={infoproducts[5].identifier} onClick={this.props.resetoptions}>Restorer</NavLink>
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

const mapDispatchToProps= dispatch=>{
  return{
    resetoptions:ev=>dispatch(resetoptions(ev))
  }
}

export const SubelvesContainer = connect(null,mapDispatchToProps)(Subelves)
