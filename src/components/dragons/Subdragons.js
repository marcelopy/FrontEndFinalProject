import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {infoproducts} from '../infoproducts/infoproducts';
import {ThunderstormContainer, NihilistContainer, BobContainer} from './dragonscards';
import {resetoptions} from '../../redux/redux';

class Subdragons extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm floating dragonsnav border border-dark rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link dragonstext" to="/dragons/thunderstorm" identifier={infoproducts[6].identifier}  onClick={this.props.resetoptions}>Thunderstorm</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dragonstext" to="/dragons/nihilist" identifier={infoproducts[7].identifier}  onClick={this.props.resetoptions}>Nihilist</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dragonstext" to="/dragons/bob" identifier={infoproducts[8].identifier}  onClick={this.props.resetoptions}>Sons of Uncle Bob</NavLink>
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

const mapDispatchToProps= dispatch=>{
  return{
    resetoptions:ev=>dispatch(resetoptions(ev))
  }
}

export const SubdragonsContainer = connect(null,mapDispatchToProps)(Subdragons)
