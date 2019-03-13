import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Infodwarves} from './Infodwarves';
import demolisher from '../images/demolisher.jpg';
import bomber from '../images/bomber.jpg';
import tinkerer from '../images/tinkerer.jpg';
import {connect} from 'react-redux';
import {toggle, increase, decrease, tobasket} from '../../redux/redux';

class Demolisher extends Component{
  render(){
    return(
      <>
        <div className="card infocard dwarvesbg" >
          <img src={demolisher} className="card-img-top img-fluid image" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{Infodwarves[0].title}</h5>
            <p className="card-text">{Infodwarves[0].desc}</p>
            <p className="dwarvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
            {this.props.isMore==="(less)"&&<Demolisherinfo />}
            <button type="button" className="btn-secondary buttontext my-2" index="0" onClick={this.props.decrease}>-</button>
            <span className='mx-5'>{this.props.counter0}</span>
            <button type="button" className="btn-secondary buttontext" index="0" onClick={this.props.increase}>+</button>
            <p className='font-weight-bold my-2'>Price:{Infodwarves[0].price} GP</p>
            <p className='text-center'><button  onClick={this.props.tobasket} type="button"
            title={Infodwarves[0].title} price={Infodwarves[0].price} qty={this.props.counter0} index="0"
            className="btn btn-info text-dark">To Basket</button></p>
          </div>
        </div>
      </>
    )
  }
}

class Bomber extends Component{

  render(){
    return(
      <>
      <div className="card infocard dwarvesbg" >
        <img src={bomber} className="card-img-top img-fluid image" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{Infodwarves[1].title}</h5>
          <p className="card-text">{Infodwarves[1].desc}</p>
          <p className="dwarvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Bomberinfo />}
          <button type="button" className="btn-secondary buttontext my-2" index="1" onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter1}</span>
          <button type="button" className="btn-secondary buttontext" index="1" onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price:{Infodwarves[1].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={Infodwarves[1].title} price={Infodwarves[1].price} qty={this.props.counter1} index="1"
          className="btn btn-info text-dark">To Basket</button></p>
        </div>
      </div>
      </>
    )
  }
}

class Tinkerer extends Component{
  render(){
    return(
      <>
      <div className="card infocard dwarvesbg" >
        <img src={tinkerer} className="card-img-top img-fluid image" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{Infodwarves[2].title}</h5>
          <p className="card-text">{Infodwarves[2].desc}</p>
          <p className="dwarvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Tinkererinfo />}
          <button type="button" className="btn-secondary buttontext my-2" index="2" onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter2}</span>
          <button type="button" className="btn-secondary buttontext" index="2" onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price:{Infodwarves[2].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={Infodwarves[2].title} price={Infodwarves[2].price} qty={this.props.counter2} index="2"
          className="btn btn-info text-dark">To Basket</button></p>
        </div>
      </div>
      </>
    )
  }
}

class Demolisherinfo extends Component{
  render(){
    return(
      <>
        <div className="card infocard moreinfocard dwarvesbg" >
          <div className="card-body">
            <h3 className="card-text">{Infodwarves[0].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

class Bomberinfo extends Component{
  render(){
    return(
      <>
        <div className="card infocard moreinfocard dwarvesbg" >
          <div className="card-body">
            <h3 className="card-text">{Infodwarves[1].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

class Tinkererinfo extends Component{
  render(){
    return(
      <>
        <div className="card infocard moreinfocard dwarvesbg" >
          <div className="card-body">
            <h3 className="card-text">{Infodwarves[2].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps =state=>{
  return{
    counter0:state.counter[0],
    counter1:state.counter[1],
    counter2:state.counter[2],
    isMore:state.isMore
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    toggle: ev=>dispatch(toggle(ev)),
    increase:ev=>dispatch(increase(ev)),
    decrease:ev=>dispatch(decrease(ev)),
    tobasket:ev=>dispatch(tobasket(ev))
  }
}

export const DemolisherContainer = connect(mapStateToProps,mapDispatchToProps)(Demolisher)
export const BomberContainer = connect(mapStateToProps,mapDispatchToProps)(Bomber)
export const TinkererContainer = connect(mapStateToProps,mapDispatchToProps)(Tinkerer)
