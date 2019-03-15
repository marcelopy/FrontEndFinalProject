import React, {Component} from 'react';
import {infoproducts} from '../infoproducts/infoproducts';
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
            <h5 className="card-title">{infoproducts[0].title}</h5>
            <p className="card-text">{infoproducts[0].desc}</p>
            <p className="dwarvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
            {this.props.isMore==="(less)"&&<Demolisherinfo />}
            <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[0].identifier} onClick={this.props.decrease}>-</button>
            <span className='mx-5'>{this.props.counter0}</span>
            <button type="button" className="btn-secondary buttontext" identifier={infoproducts[0].identifier} onClick={this.props.increase}>+</button>
            <p className='font-weight-bold my-2'>Price: {infoproducts[0].price} GP</p>
            <p className='text-center'><button  onClick={this.props.tobasket} type="button"
            title={infoproducts[0].title} price={infoproducts[0].price} identifier={infoproducts[0].identifier}
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
          <h5 className="card-title">{infoproducts[1].title}</h5>
          <p className="card-text">{infoproducts[1].desc}</p>
          <p className="dwarvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Bomberinfo />}
          <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[1].identifier} onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter1}</span>
          <button type="button" className="btn-secondary buttontext" identifier={infoproducts[1].identifier} onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price: {infoproducts[1].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={infoproducts[1].title} price={infoproducts[1].price} identifier={infoproducts[1].identifier}
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
          <h5 className="card-title">{infoproducts[2].title}</h5>
          <p className="card-text">{infoproducts[2].desc}</p>
          <p className="dwarvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Tinkererinfo />}
          <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[2].identifier} onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter2}</span>
          <button type="button" className="btn-secondary buttontext" identifier={infoproducts[2].identifier} onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price: {infoproducts[2].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={infoproducts[2].title} price={infoproducts[2].price} identifier={infoproducts[2].identifier}
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
            <h3 className="card-text">{infoproducts[0].extra}</h3>
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
            <h3 className="card-text">{infoproducts[1].extra}</h3>
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
            <h3 className="card-text">{infoproducts[2].extra}</h3>
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
