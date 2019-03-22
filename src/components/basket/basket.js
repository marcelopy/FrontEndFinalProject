import React, {Component} from 'react';
import basket from '../images/basket.jpg';
import {connect} from 'react-redux';
import {removeitem, resetcounter} from '../../redux/redux';
import {NavLink, Route} from 'react-router-dom';
import {Logout} from '../home/Logout';



class Basket extends Component{

  render(){
    return(
      <>
      <div className="card infocardbasket">
        <img alt='' src={basket} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">Checkout Total: {this.props.totalbasket} GP</h5>
          <div className="card-text">{this.props.basket.map((item,index)=>{
                  return(

                    <div key={index}>
                  {item.qty>0 && <li className="list">{item.product} x {item.qty} = {item.qty*item.price} GP <span title={item.product} price={item.price} identifier={item.identifier} className="btn btn-outline-danger closeX" onClick={this.props.removeitem}>&times;</span></li>}
                    </div>

                  )
          })}</div>
        </div>
          <NavLink  to="/logout" onClick={this.props.resetcounter}><button className="btn btn-info text-dark">Logout</button></NavLink>
      </div>
      <Route exact path="/logout" component={Logout} />
      </>
    )
  }
}
const mapStateToProps = state =>{
  return{
    basket:state.basket,
    totalbasket:state.totalbasket
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    removeitem: ev => dispatch(removeitem(ev)),
    resetcounter:ev=> dispatch(resetcounter(ev))
  }
}

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket)
