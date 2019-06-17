import React, { useReducer } from 'react';

const ADD = 'add';
const MINUS = 'minus';
const RESET = 'reset';

const initState = { count: 0 };

const reducer = (state, action) => {
  switch(action.type){
    case ADD:
      return {
        count: state.count + 1
      }
    case MINUS:
      return {
        count: state.count - 1
      }
    case RESET:
      return {...initState}
    default:
      return state;
  }
}

const Counter = () =>{
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <section>
      <h2>Counter</h2>
      <p><strong>Count: </strong> {state.count}</p>
      <button className="btn btn-primary" onClick={dispatchAction({type: ADD})} >+</button>
      <button className="btn btn-primary" onClick={dispatchAction({type: MINUS})} >-</button>
      <button className="btn btn-primary" onClick={dispatchAction({type: RESET})} >reset</button>
    </section>
  );

  function dispatchAction(action){
    return () => dispatch(action);
  }
}

export default Counter;
