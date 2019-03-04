import {createStore} from 'redux';

const initialState={counter:0, isExpanded:'(more)', basketQuantity:0, totalMoney:0,
itemsInBasket:[], itemSelected:[],
  elves:[
        { title:'Singer', desc:'You will only hear their singing arrows when is too late  ', extra:'Equipped with the deadliest set of arrows ever created', price:260},
        { title:'Shadower', desc:'They don`t just disappear into the darkness, they ARE darkness  ', extra:'Their natural infra-red vision makes them the best night fighters', price:280},
        { title:'Restorer', desc:'They are not healers and doctors, as their name imply  ', extra:'They bring balance back to nature, with your blood', price:270}
  ]};
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
    case 'TOBASKETSINGER':
        copyOfState.counter>0?copyOfState.basketQuantity=copyOfState.counter:copyOfState.basketQuantity=0;
        copyOfState.itemsInBasket=[...copyOfState.itemsInBasket,copyOfState.counter];
        copyOfState.itemSelected=[...copyOfState.itemSelected, "Singer"]
        copyOfState.totalMoney=copyOfState.totalMoney+(copyOfState.elves[0].price*copyOfState.counter)
        return copyOfState;
    case 'TOBASKETSHADOWER':
        copyOfState.counter>0?copyOfState.basketQuantity=copyOfState.counter:copyOfState.basketQuantity=0;
        copyOfState.itemsInBasket=[...copyOfState.itemsInBasket,copyOfState.counter];
        copyOfState.itemSelected=[...copyOfState.itemSelected, "Shadower"]
        copyOfState.totalMoney=copyOfState.totalMoney+(copyOfState.elves[1].price*copyOfState.counter)
        return copyOfState;
    case 'TOBASKETRESTORER':
        copyOfState.counter>0?copyOfState.basketQuantity=copyOfState.counter:copyOfState.basketQuantity=0;
        copyOfState.itemsInBasket=[...copyOfState.itemsInBasket,copyOfState.counter];
        copyOfState.itemSelected=[...copyOfState.itemSelected, "Restorer"];
        copyOfState.totalMoney=copyOfState.totalMoney+(copyOfState.elves[2].price*copyOfState.counter);
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

export const toBasketSinger=(ev)=>{
  return{
    type:'TOBASKETSINGER',
  }
}

export const toBasketShadower=(ev)=>{
  return{
    type:'TOBASKETSHADOWER',
  }
}

export const toBasketRestorer=(ev)=>{
  return{
    type:'TOBASKETRESTORER',
  }
}
export const store= createStore(reducer)
