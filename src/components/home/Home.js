import React, {Component} from 'react';
import storefront from '../images/storefront.jpg'

export class Home extends Component{
  render(){
    return(
      <>
          <div className='text-center mainareacolor'>
            <h1 className='text-primarx  display-2'>Welcome to the Fantasy Store!</h1>
            <img alt='' className="w-50 m-2" src={storefront}/>
            <h4>We have all you need to equip your armies with the best, the bravest, the boldest!</h4>
          </div>
      </>
    )
  }
}
