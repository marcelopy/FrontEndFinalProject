import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import storefront from '../images/storefront.jpg'

export class Home extends Component{
  render(){
    return(
      <>
          <div className='text-center'>
            <h1 className='text-primarx  display-2'>Welcome to Fantasy Store!</h1>
            <img  className="w-50 m-2" src={storefront}/>
            <h4 className="">We have all you need to equip your armies with the best, the bravest, the boldest!</h4>
          </div>
      </>
    )
  }
}
