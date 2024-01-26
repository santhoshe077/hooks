import React from 'react'
import { useState } from 'react'
import './Counter.css'
export default function Counter() {
    const [count,setCount]=useState(0);

      const Increment=()=>
      {
        setCount(count+1);
      };
      const Decrement=()=>
      {
       setCount(count-1);
      }
      const Reset=()=>
      {
        setCount(0)
      }
    
  return (
    <div className='parent'>
      <div className='child'>
        <div>
          <h1>Counter:{count}</h1>
          <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>

          </div>
        </div>
      </div>
    
    </div>

  )
}
