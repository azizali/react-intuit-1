import React from 'react';
import Header from './Header'
import Footer from './Footer'

export default function Wrapper ({ name, children }){
  console.log(children)
  // children();
  return (
    <div>
      <h1>{name}</h1>
      <Header
        name="Intuit"
        age={12}
        employees={['Siva', 'Matt', 'Colston']}
        options={{
          numberOfOffices: 5,
          numberOfEmployees: 2000
        }}
        getInfo={()=>{
          // Save user API call
          return 'Hello';
        }}
      />
      {/* {children} */}
      <Footer />
    </div>
  )
}