import React, { useState } from 'react';
import CounterNew from './CounterNew';
import Score from './Score';

export default function Container(){
  const [counter, setCounter] = useState(0);

  const handleClick = (value) =>{
    setCounter(value || counter + 1)
  }

  return(
    <div style={{
      border: "2px solid black",
      padding: '10px'
    }}>
      <small>Container</small>
      <button onClick={()=>{handleClick()}}>Add Count</button>
      {counter < 3 && <CounterNew value={counter} />}
      <Score
        score={counter}
        updateScore={handleClick}
      />
    </div>
  )
}
