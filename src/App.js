import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Navlist} from './components/navlist/Navlist';
import {Logout} from './components/home/Logout';
import './App.css';


export class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <>
          <Navlist />
        </>
      </BrowserRouter>
    )
  }
}
