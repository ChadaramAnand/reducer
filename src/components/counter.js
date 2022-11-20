import React, { useReducer } from 'react';
import { Reducer } from './reducer';
const initialState={
    num : 0
}

const Count = () => {
    const [value , dispatch] = useReducer(Reducer,initialState)
  return (
    <div>
        <h1>counter</h1>
        <button onClick={()=>{dispatch({type:'Increment',payload:value.num+1})}}>+</button>
        <div>{value.num}</div>
        <button onClick={()=>{dispatch({type:'Decrement'})}}>-</button>
        <button onClick={()=>{dispatch({type:'Reset'})}}>Reset</button>
        

    </div>
  )
}

export default Count;