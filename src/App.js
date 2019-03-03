import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Navlist} from './components/navlist/Navlist';
import {Home} from './components/home/Home';
import {Dwarves} from './components/dwarves/Dwarves';
import {Elves} from './components/elves/Elves';
import {Dragons} from './components/dragons/Dragons';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navlist/>
          <div className='jumbotron bg-info containerheight padding'>
            <div className='container'>
              <Route exact path="/" render={()=>{
                  return <Home/>}}/>
              <Route path="/dwarves" render={()=>{
                  return <Dwarves/>}}/>
              <Route path="/elves" render={()=>{
                  return <Elves/>}}/>
              <Route path="/dragons" render={()=>{
                  return <Dragons/>}}/>
            </div>
          </div>

        </>
      </BrowserRouter>
    );
  }
}

export default App;
