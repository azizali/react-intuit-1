import React, { useState } from 'react'

// Hooks Rules
// Only in Function
// Root level of a function
    // NOT in subfunction
    // NOT in loop
    // NOT in conditional

export default function CounterHook(){
  const [counter, setCounter] = useState(0);
  const [name] = useState('Intuit');
  const [options, setOptions] = useState({
    height: 2,
    width: 3
  });

  // const stateArray = useState(0);
  // const counter = stateArray[0];
  // const setCounter = stateArray[1];

  return (
    <div>
      Counter: {counter}<br />
      Name: {name}
      <button
        onClick={()=> setCounter(counter+1)}>
          {counter}
      </button>
      <button
        onClick={()=> setOptions({ height: 3})}>
          Reset Options
      </button>
      <pre>{JSON.stringify(options, null, 2)}</pre>
    </div>
  )
}