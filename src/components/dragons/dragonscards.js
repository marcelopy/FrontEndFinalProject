import React, {Component} from 'react';
import {infoproducts} from '../infoproducts/infoproducts';
import thunderstorm from '../images/thunderstorm.jpg';
import nihilist from '../images/nihilist.jpg';
import bob from '../images/bob.jpg';
import {connect} from 'react-redux';
import {toggle, increase, decrease, tobasket} from '../../redux/redux';

class Thunderstorm extends Component{
  render(){
    return(
      <>
        <div className="card infocard dragonsbg" >
          <img src={thunderstorm} className="card-img-top img-fluid image" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{infoproducts[6].title}</h5>
            <p className="card-text">{infoproducts[6].desc}</p>
            <p className="dragonstext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
            {this.props.isMore==="(less)"&&<Thunderstorminfo />}
            <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[6].identifier} onClick={this.props.decrease}>-</button>
            <span className='mx-5'>{this.props.counter6}</span>
            <button type="button" className="btn-secondary buttontext" identifier={infoproducts[6].identifier} onClick={this.props.increase}>+</button>
            <p className='font-weight-bold my-2'>Price: {infoproducts[6].price} GP</p>
            <p className='text-center'><button  onClick={this.props.tobasket} type="button"
            title={infoproducts[6].title} price={infoproducts[6].price} identifier={infoproducts[6].identifier}
            className="btn btn-info text-dark">To Basket</button></p>
          </div>
        </div>
      </>
    )
  }
}

class Nihilist extends Component{

  render(){
    return(
      <>
      <div className="card infocard dragonsbg" >
        <img src={nihilist} className="card-img-top img-fluid image" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{infoproducts[7].title}</h5>
          <p className="card-text">{infoproducts[7].desc}</p>
          <p className="dragonstext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Nihilistinfo />}
          <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[7].identifier} onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter7}</span>
          <button type="button" className="btn-secondary buttontext" identifier={infoproducts[7].identifier} onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price: {infoproducts[7].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={infoproducts[7].title} price={infoproducts[7].price} identifier={infoproducts[7].identifier}
          className="btn btn-info text-dark">To Basket</button></p>
        </div>
      </div>
      </>
    )
  }
}

class Bob extends Component{
  render(){
    return(
      <>
      <div className="card infocard dragonsbg" >
        <img src={bob} className="card-img-top img-fluid image" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{infoproducts[8].title}</h5>
          <p className="card-text">{infoproducts[8].desc}</p>
          <p className="dragonstext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Bobinfo />}
          <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[8].identifier} onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter8}</span>
          <button type="button" className="btn-secondary buttontext" identifier={infoproducts[8].identifier} onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price: {infoproducts[8].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={infoproducts[8].title} price={infoproducts[8].price} identifier={infoproducts[8].identifier}
          className="btn btn-info text-dark">To Basket</button></p>
        </div>
      </div>
      </>
    )
  }
}

class Thunderstorminfo extends Component{
  render(){
    return(
      <>
        <div className="card moreinfocard dragonsbg" >
          <div className="card-body">
            <h3 className="card-text">{infoproducts[6].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

class Nihilistinfo extends Component{
  render(){
    return(
      <>
        <div className="card moreinfocard dragonsbg" >
          <div className="card-body">
            <h3 className="card-text">{infoproducts[7].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

class Bobinfo extends Component{
  render(){
    return(
      <>
        <div className="card moreinfocard dragonsbg" >
          <div className="card-body">
            <h3 className="card-text">{infoproducts[8].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps =state=>{
  return{
    counter6:state.counter[6],
    counter7:state.counter[7],
    counter8:state.counter[8],
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

export const ThunderstormContainer = connect(mapStateToProps,mapDispatchToProps)(Thunderstorm)
export const NihilistContainer = connect(mapStateToProps,mapDispatchToProps)(Nihilist)
export const BobContainer = connect(mapStateToProps,mapDispatchToProps)(Bob)
