import {createStore} from 'redux';

const initialState={counter:0, isExpanded:'(more)'};

const reducer = (state=initialState, action)=>{
  const copyOfState={...state};
  switch (action.type) {
    case 'INCREASECOUNTER':
        copyOfState.counter=state.counter+1;
      return copyOfState;
    case 'DECREASECOUNTER':
    copyOfState.counter>0?copyOfState.counter=state.counter-1:copyOfState.counter=0;
      return copyOfState;
    case 'TOGGLEEXPAND':
      copyOfState.isExpanded==='(more)'?copyOfState.isExpanded='(less)':copyOfState.isExpanded='(more)';
      return copyOfState;
    case 'WHATTITLE':
      console.log(state.counter);
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

export const toggleExpand=(ev)=>{
  return{
    type:'TOGGLEEXPAND',
  }
}

export const whatTitle=(ev)=>{
  return{
    type:'WHATTITLE',
  }
}

export const store= createStore(reducer)
