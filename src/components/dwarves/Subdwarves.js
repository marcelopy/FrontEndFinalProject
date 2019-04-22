import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {infoproducts} from '../infoproducts/infoproducts';
import {DemolisherContainer, BomberContainer, TinkererContainer} from './Dwarvescards';
import {resetoptions} from '../../redux/redux';


class Subdwarves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm floating dwarvesnav border border-dark rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link dwarvestext" to="/dwarves/demolisher" identifier={infoproducts[0].identifier} onClick={this.props.resetoptions}>Demolisher</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dwarvestext" to="/dwarves/bomber" identifier={infoproducts[1].identifier} onClick={this.props.resetoptions} >Bomber</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link dwarvestext" to="/dwarves/tinkerer" identifier={infoproducts[2].identifier} onClick={this.props.resetoptions} >Tinkerer</NavLink>
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

const mapDispatchToProps= dispatch=>{
  return{
    resetoptions:ev=>dispatch(resetoptions(ev))
  }
}

export const SubdwarvesContainer = connect(null,mapDispatchToProps)(Subdwarves)
