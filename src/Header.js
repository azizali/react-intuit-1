import React from 'react';

export default function Header (props){
  const value = props.getInfo();
  
  return (
    <div>
      Hello {props.name} <br />
      Age: {props.age} <br />
      Employees: {props.employees} <br />
      Office Count: {props.options.numberOfOffices}<br />
      Employee Count: {props.options.numberOfEmployees}<br />
      getInfo: {value} <br />
      <hr />
    </div>
  )
}