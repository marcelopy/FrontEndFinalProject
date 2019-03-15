import React, {Component} from 'react';
import {infoproducts} from '../infoproducts/infoproducts';
import singer from '../images/singer.jpg';
import shadower from '../images/shadower.jpg';
import restorer from '../images/restorer.jpg';
import {connect} from 'react-redux';
import {toggle, increase, decrease, tobasket} from '../../redux/redux';

class Singer extends Component{
  render(){
    return(
      <>
        <div className="card infocard elvesbg" >
          <img src={singer} className="card-img-top img-fluid image" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{infoproducts[3].title}</h5>
            <p className="card-text">{infoproducts[3].desc}</p>
            <p className="elvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
            {this.props.isMore==="(less)"&&<Singerinfo />}
            <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[3].identifier} onClick={this.props.decrease}>-</button>
            <span className='mx-5'>{this.props.counter3}</span>
            <button type="button" className="btn-secondary buttontext" identifier={infoproducts[3].identifier} onClick={this.props.increase}>+</button>
            <p className='font-weight-bold my-2'>Price: {infoproducts[3].price} GP</p>
            <p className='text-center'><button  onClick={this.props.tobasket} type="button"
            title={infoproducts[3].title} price={infoproducts[3].price} identifier={infoproducts[3].identifier}
            className="btn btn-info text-dark">To Basket</button></p>
          </div>
        </div>
      </>
    )
  }
}

class Shadower extends Component{

  render(){
    return(
      <>
      <div className="card infocard elvesbg" >
        <img src={shadower} className="card-img-top img-fluid image" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{infoproducts[4].title}</h5>
          <p className="card-text">{infoproducts[4].desc}</p>
          <p className="elvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Shadowerinfo />}
          <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[4].identifier} onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter4}</span>
          <button type="button" className="btn-secondary buttontext" identifier={infoproducts[4].identifier} onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price: {infoproducts[4].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={infoproducts[4].title} price={infoproducts[4].price} identifier={infoproducts[4].identifier}
          className="btn btn-info text-dark">To Basket</button></p>
        </div>
      </div>
      </>
    )
  }
}

class Restorer extends Component{
  render(){
    return(
      <>
      <div className="card infocard elvesbg" >
        <img src={restorer} className="card-img-top img-fluid image" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{infoproducts[5].title}</h5>
          <p className="card-text">{infoproducts[5].desc}</p>
          <p className="elvestext pointer" onClick={this.props.toggle}>{this.props.isMore}</p>
          {this.props.isMore==="(less)"&&<Restorerinfo />}
          <button type="button" className="btn-secondary buttontext my-2" identifier={infoproducts[5].identifier} onClick={this.props.decrease}>-</button>
          <span className='mx-5'>{this.props.counter5}</span>
          <button type="button" className="btn-secondary buttontext" identifier={infoproducts[5].identifier} onClick={this.props.increase}>+</button>
          <p className='font-weight-bold my-2'>Price: {infoproducts[5].price} GP</p>
          <p className='text-center'><button  onClick={this.props.tobasket} type="button"
          title={infoproducts[5].title} price={infoproducts[5].price} identifier={infoproducts[5].identifier}
          className="btn btn-info text-dark">To Basket</button></p>
        </div>
      </div>
      </>
    )
  }
}

class Singerinfo extends Component{
  render(){
    return(
      <>
        <div className="card infocard moreinfocard elvesbg" >
          <div className="card-body">
            <h3 className="card-text">{infoproducts[3].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

class Shadowerinfo extends Component{
  render(){
    return(
      <>
        <div className="card infocard moreinfocard elvesbg" >
          <div className="card-body">
            <h3 className="card-text">{infoproducts[4].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

class Restorerinfo extends Component{
  render(){
    return(
      <>
        <div className="card infocard moreinfocard elvesbg" >
          <div className="card-body">
            <h3 className="card-text">{infoproducts[5].extra}</h3>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps =state=>{
  return{
    counter3:state.counter[3],
    counter4:state.counter[4],
    counter5:state.counter[5],
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

export const SingerContainer = connect(mapStateToProps,mapDispatchToProps)(Singer)
export const ShadowerContainer = connect(mapStateToProps,mapDispatchToProps)(Shadower)
export const RestorerContainer = connect(mapStateToProps,mapDispatchToProps)(Restorer)
