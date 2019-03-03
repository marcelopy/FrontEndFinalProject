import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import elves from '../images/elves.jpg';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {increaseCounter, decreaseCounter, resetCounter} from '../../redux/redux';


class Subelves extends Component{
  render(){
    return(
      <>
        <nav className="navbar navbar-expand-sm bg-light floating elves">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/singer" onClick={this.props.resetCounter}>Singer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/shadower" onClick={this.props.resetCounter}>Shadower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/elves/restorer" onClick={this.props.resetCounter}>Restorer</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/elves/singer" render={()=>
          <>
            <div className="infocard elves text-center">
              <h3>Singer</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100% max-height:40%" src={elves}/>
              <p>The best there is for a quick boom! <span className="pointer"><NavLink to="/elves/singer/singerinfo">(more)</NavLink></span></p>
              <button onClick={this.props.decreaseCounter} type="button" className="btn-secondary buttontext">-</button>
              <span className="mx-5">{this.props.counter}</span>
              <button onClick={this.props.increaseCounter} type="button" className="btn-secondary buttontext">+</button>
              <p></p>
              <p><button onClick={this.props.whatTitle} type="button" className="btn btn-info text-dark">To Basket</button></p>
            </div>
          </>
        }/>
        <Route path="/elves/shadower" render={()=>
          <>
            <div className="infocard elves text-center">
              <h3>Shadower</h3>
              <img alt='' className="img-thumbnail img-fluid max-width:100%" src={elves}/>
              <p>The best there is for a quick boom! <span className="pointer"><NavLink to="/elves/shadower/shadowerinfo">(more)</NavLink></span></p>
              <button onClick={this.props.decreaseCounter} type="button" className="btn-secondary buttontext">-</button>
              <span className="mx-5">{this.props.counter}</span>
              <button onClick={this.props.increaseCounter} type="button" className="btn-secondary buttontext">+</button>
              <p></p>
              <p><button onClick={this.props.whatTitle} type="button" className="btn btn-info text-dark">To Basket</button></p>
            </div>
          </>
        }/>
        <Route path="/elves/restorer" render={()=>
          <>
            <div className="infocard elves text-center">
              <h3>Restorer</h3>
              <img  alt='' className="img-thumbnail img-fluid max-width:100%" src={elves}/>
              <p>The best there is for a quick boom! <span className="pointer"><NavLink to="/elves/restorer/restorerinfo">(more)</NavLink></span></p>
              <button onClick={this.props.decreaseCounter} type="button" className="btn-secondary buttontext">-</button>
              <span className="mx-5">{this.props.counter}</span>
              <button onClick={this.props.increaseCounter} type="button" className="btn-secondary buttontext">+</button>
              <p></p>
              <p><button onClick={this.props.whatTitle} type="button" className="btn btn-info text-dark">To Basket</button></p>
            </div>
          </>
        }/>
        <Route path="/elves/singer/singerinfo" render={()=>
          <>
            <div className="card text-center elves moreinfocard">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <NavLink to="/elves/singer">Close</NavLink>
              </div>
            </div>
          </>
          } />
          <Route path="/elves/shadower/shadowerinfo" render={()=>
            <>
              <div className="card text-center elves moreinfocard">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <NavLink to="/elves/shadower">Close</NavLink>
                </div>
              </div>
            </>
          } />
          <Route path="/elves/restorer/restorerinfo" render={()=>
            <>
              <div className="card text-center elves moreinfocard">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <NavLink to="/elves/restorer">Close</NavLink>
                </div>
              </div>
            </>
          } />
      </>
    )
  }
}

const mapStateToProps = state =>{
  return{
    counter:state.counter,
    isExpanded:state.isExpanded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: (ev) => dispatch(increaseCounter(ev)),
    decreaseCounter: (ev) => dispatch(decreaseCounter(ev)),
    resetCounter:(ev)=>dispatch(resetCounter(ev)),
  }
}
export const SubelvesContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(Subelves))
