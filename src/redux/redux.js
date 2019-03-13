import {createStore} from 'redux';
import {Infodwarves} from '../components/dwarves/Infodwarves'

const initialState={
  isMore:"(more)",
  counter:[0,0,0],
  totalbasket:0,
  basket:[]
};

const reducer =(state=initialState, action)=>{
  const copyOfState={...state};
  switch (action.type) {
    case 'toggle':
      copyOfState.isMore==="(more)"?copyOfState.isMore="(less)":copyOfState.isMore="(more)"
      return copyOfState;
    case 'increase':
      const indexinc=parseFloat(action.event.target.getAttribute('index'))
      copyOfState.counter[indexinc]=state.counter[indexinc]+1
      return copyOfState;
    case 'decrease':
      const indexdec=parseFloat(action.event.target.getAttribute('index'))
      copyOfState.counter[indexdec]>0?copyOfState.counter[indexdec]=state.counter[indexdec]-1:copyOfState.counter[indexdec]=0
      return copyOfState;
    case 'tobasket':
      const product=action.event.target.getAttribute('title');
      const price=parseFloat(action.event.target.getAttribute('price'));
      const index=parseFloat(action.event.target.getAttribute('index'));

    const isRepeat=copyOfState.basket.find(item=>item.product===product)
    if(isRepeat){
        isRepeat.qty=parseFloat(copyOfState.counter[index])
        console.log(isRepeat)
        copyOfState.basket=[...state.basket, isRepeat]
    } else {
      const order={
        product:product,
        price:price,
        qty:parseFloat(copyOfState.counter[index])
      }

      copyOfState.basket=[...state.basket, order]

  }
      copyOfState.counter[index]=0;

      return copyOfState;
    default:
      return copyOfState;
}

}

export const toggle= ev=>{
  return {type:'toggle', event:ev}
}

export const increase = ev=>{
  return {type:'increase', event:ev}
}

export const decrease = ev=>{
  return {type:'decrease', event:ev}
}

export const tobasket = ev=>{
  return {type:'tobasket', event:ev}
}


export const store= createStore(reducer);
