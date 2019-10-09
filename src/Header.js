import React from 'react';
import PropTypes from 'prop-types'

export default function Header ({ age, getInfo, name, options, employees }){
  age = 15;
  const value = getInfo();
  
  return (
    <div>   
      Hello {name} <br />
      Age: {age * 3} <br />
      Valid: {(function(){ return 'abc'})()} <br />
      
      {/* // Invalid since its not an expression */}
      {/* Valid?: {function(){ return 'abc'}} <br /> */}
      
      {(age > 21)? 'You are allowed access': 'You are underage'}<br />
      
      {!!employees && <>Employees: {employees}<br /></>}
      
      Office Count: {options.numberOfOffices}<br />
      
      Employee Count: {options.numberOfEmployees}<br />
      
      getInfo: {value} <br />
      <hr />
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
}