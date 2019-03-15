import {createStore} from 'redux';

const initialState={
  isMore:"(more)",
  counter:[0,0,0,0,0,0,0,0,0],
  partialcost:[0,0,0,0,0,0,0,0,0],
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
      const indexinc=parseFloat(action.event.target.getAttribute('identifier'))
      copyOfState.counter[indexinc]=state.counter[indexinc]+1
      return copyOfState;
    case 'decrease':
      const indexdec=parseFloat(action.event.target.getAttribute('identifier'))
      copyOfState.counter[indexdec]>0?copyOfState.counter[indexdec]=state.counter[indexdec]-1:copyOfState.counter[indexdec]=0
      return copyOfState;
    case 'tobasket':
      const product=action.event.target.getAttribute('title');
      const price=parseFloat(action.event.target.getAttribute('price'));
      const identifier=parseFloat(action.event.target.getAttribute('identifier'));


      const isRepeat=copyOfState.basket.find(item=>item.product===product)
          if(isRepeat){
              isRepeat.qty=parseFloat(copyOfState.counter[identifier])
              copyOfState.partialcost[identifier]=parseFloat(isRepeat.price)*parseFloat(isRepeat.qty)
              copyOfState.basket=[...state.basket]

          } else {
            const order={
              identifier:identifier,
              product:product,
              price:price,
              qty:parseFloat(copyOfState.counter[identifier]),
            }
              copyOfState.partialcost[identifier]=parseFloat(order.price)*parseFloat(order.qty)
              copyOfState.basket=[...state.basket, order]
          }
              copyOfState.totalbasket=0;
          for (let i = 0; i < state.counter.length; i++) {
            copyOfState.totalbasket += copyOfState.partialcost[i];
          }
            copyOfState.counter[identifier]=0;

      return copyOfState;

    case 'removeitem':
    const producttoremove=action.event.target.getAttribute('title');
    const identifiertoremove=action.event.target.getAttribute('identifier');


    const itemtoremove=copyOfState.basket.find(item=>item.product===producttoremove)
        if(itemtoremove){
            itemtoremove.qty=0
            copyOfState.partialcost[identifiertoremove]=0
            copyOfState.basket=[...state.basket]
          }
          copyOfState.totalbasket=0;
          for (let i=0; i<state.counter.length; i++){
            copyOfState.totalbasket += copyOfState.partialcost[i]
          }
          copyOfState.counter[identifiertoremove]=0;
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

export const removeitem = ev=>{
  return {type:'removeitem', event:ev}
}

export const store= createStore(reducer);
