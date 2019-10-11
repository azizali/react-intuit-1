import React, {useState} from 'react';
import PopulationHook from './Hooks/PopulationHook'
import CounterHook from './Hooks/CounterHook'
import Container from './CountTracker/Container'

export default function App (){
  const [num, setNum] = useState(0)
  const [age, setAge] = useState(0)
  return (
    <>
      {/* <Container />
      <hr />
      <CounterHook /> */}
      {num <1 && <PopulationHook
        num={num}
        age={age}
      />}
      <button onClick={()=> setNum(num+1)}>num</button>
      <button onClick={()=> setAge(age+1)}>Age</button>
    </>
  )
}