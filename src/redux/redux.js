import React from 'react';
import {createStore} from 'redux';
import {NavLink} from 'react-router-dom';

const initialState={counter:0, isExpanded:'(more)', elvesinfo:'/elves/singer/singerinfo'};

const reducer = (state=initialState, action)=>{
  const copyOfState={...state};
  switch (action.type) {
    case 'INCREASECOUNTER':
        copyOfState.counter=state.counter+1;
      return copyOfState;
    case 'DECREASECOUNTER':
      copyOfState.counter>0?copyOfState.counter=state.counter-1:copyOfState.counter=0;
      return copyOfState;
    case 'RESETCOUNTER':
      copyOfState.counter=0;
      return copyOfState;
    default:
      return state;

  }
}

export const increaseCounter=(ev)=>{
  return {
    type:'INCREASECOUNTER',
  }
}

export const decreaseCounter=(ev)=>{
  return {
    type:'DECREASECOUNTER',
  }
}

export const resetCounter=(ev)=>{
  return{
    type:'RESETCOUNTER',
  }
}

export const store= createStore(reducer)
