import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import elves from '../images/elves.jpg';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {increaseCounter, decreaseCounter, toggleExpand, whatTitle} from '../../redux/redux';


class Subelves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating elves">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/singer">Singer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/shadower">Shadower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/restorer">Restorer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/elves/singer" render={()=>
          <>
            <div className="infocard elves text-center">
              <h3>Singer</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100% max-height:40%" src={elves}/>
              <p>The best there is for a quick boom!</p>
              <button onClick={this.props.decreaseCounter} type="button" className="btn-secondary buttontext">-</button>
              <span className="mx-5">{this.props.counter}</span>
              <button onClick={this.props.increaseCounter} type="button" className="btn-secondary buttontext">+</button>
              <p><button onClick={this.props.whatTitle} type="button" className="btn btn-info">To Basket</button></p>
            </div>
          </>
        }/>
        <Route path="/elves/shadower" render={()=>
          <>
            <div className="infocard elves text-center">
              <h3>Shadower</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100%" src={elves}/>
              <p>The best there is for a quick boom!</p>
            </div>
          </>
        }/>
        <Route path="/elves/restorer" render={()=>
          <>
            <div className="infocard elves text-center">
              <h3>Restorer</h3>
              <img  alt='' className="img-thumbnail img-fluid max-width:100%" src={elves}/>
              <p>The best there is for a quick boom!</p>
            </div>
          </>
        }/>
      </>
    )
  }
}

const mapStateToProps = state =>{
  return{
    counter:state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: (ev) => dispatch(increaseCounter(ev)),
    decreaseCounter: (ev) => dispatch(decreaseCounter(ev)),
    toggleExpand:(ev)=>dispatch(toggleExpand(ev)),
    whatTitle:(ev)=>dispatch(whatTitle(ev))
  }
}
export const SubelvesContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(Subelves))
