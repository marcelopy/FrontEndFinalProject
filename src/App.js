import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Navlist} from './components/navlist/Navlist';
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
