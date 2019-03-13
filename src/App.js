import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Navlist} from './components/navlist/Navlist';
import {Home} from './components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navlist />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
