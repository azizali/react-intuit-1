import React, { Component } from 'react';

export default class CounterNew extends Component{
  constructor(){
    super();
    console.log('Constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render(){
    console.log('render');
    return(
      <div style={{
        border: "2px solid green",
        padding: '10px'
      }}>
        CounterNew: {this.props.value}
      </div>
    )
  }
}
