import React from 'react';
import CounterHook from './Hooks/CounterHook'
import Container from './CountTracker/Container'

export default function App (){
  return (
    <>
      <Container />
      <hr />
      <CounterHook />
    </>
  )
}