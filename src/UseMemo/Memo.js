import React, {useMemo , useState} from 'react'

export default function Memo({data}) {
    const [Input,setInput]=useState("");
    const expensiveCalculaton=(data)=>
    {
        console.log("Performing Calculation");
        return data.toUpperCase();
    };
    const memoizedresult=useMemo(()=>expensiveCalculaton(Input),[Input]);

  return (
    <div> 
        <label>Data
        <input type='text' value={Input} onChange={(e)=>setInput(e.target.value)}></input>
        </label>
        <p>Original data: {Input}</p>
        <p>Memoized result: {memoizedresult}</p>
    </div>
  );
}
