import React from 'react';
import Wrapper from './Wrapper';
import Content from './Content'

// Capitalized
// Return a user Interface
// One parent
export default function App (){
  return (
    <div>
      {/* WRAPPER A: named as prop */}
      <Wrapper name="Wrapper A" children={()=>{ console.log('hi')}}>
        {()=>{ console.log('hi')}}
      </Wrapper>
      
      {/* WRAPPER B: Most common usecase */}
      <Wrapper name="Wrapper B">
        Some words over here in B
        <Content />
        Some additional stuff
      </Wrapper>

      {/* WRAPPER C */}
      {/* <Wrapper name="Wrapper C">
        {()=>{console.log('hello C')}}
      </Wrapper> */}
    </div>
  )
}