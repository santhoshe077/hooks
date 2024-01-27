import React , {useRef,useEffect,useState}from 'react'

export default function CounterComponent() {
  const counterRef=useRef(0);
  const [count,setCount]=useState(0);

  useEffect(()=>{
    console.log('Counter Ref:',counterRef.current);
  },[count]);

  const incrementCounter=()=>{
    counterRef.current+=1;
    setCount((prevCount)=>prevCount+1);
  };
  return (
    <div>
      <p>Counter Value (State):{count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
