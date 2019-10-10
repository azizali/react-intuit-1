import React from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function Wrapper (){
  return (
    <div>
      <Header
        name="Intuit"
        age={12}
        employees={['Siva', 'Matt', 'Colston']}
        options={{
          numberOfOffices: 5,
          numberOfEmployees: 2000
        }}
        getInfo={()=>{
          return 'Hello'
        }}
      />
      <Content />
      <Footer />
    </div>
  )
}