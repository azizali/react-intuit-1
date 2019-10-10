import React from 'react';

export default function Header (props){
  const value = props.getInfo();
  
  return (
    <div>   
      Hello {props.name} <br />
      Age: {props.age * 3} <br />
      Valid: {(function(){ return 'abc'})()} <br />
      
      {/* // Invalid since its not an expression */}
      {/* Valid?: {function(){ return 'abc'}} <br /> */}
      
      {(props.age > 21)? 'You are allowed access': 'You are underage'}<br />
      
      {!!props.employees && <>Employees: {props.employees}<br /></>}
      
      Office Count: {props.options.numberOfOffices}<br />
      
      Employee Count: {props.options.numberOfEmployees}<br />
      
      getInfo: {value} <br />
      <hr />
    </div>
  )
}