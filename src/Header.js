import React from 'react';

export default function Header (props){
  const value = props.getInfo()
  console.log(props);
  
  return (
    <div>
      Hello {props.name} <br />
      Age: {props.age} <br />
      Employees: {props.employees} <br />
      getInfo: {value} <br />
      <hr />
    </div>
  )
}