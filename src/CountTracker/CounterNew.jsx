import React, { Component } from 'react';

export default class CounterNew extends Component{
  render(){
    console.log(this.props);
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
