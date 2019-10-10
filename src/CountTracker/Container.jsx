import React, { Component } from 'react';
import CounterNew from './CounterNew';
import Score from './Score';

export default class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value){
    this.setState((prevState)=>{
      return {
        counter: value || prevState.counter + 1
      }
    })
  }

  render(){
    return(
      <div style={{
        border: "2px solid black",
        padding: '10px'
      }}>
        <small>Container</small>
        <button onClick={()=>{this.handleClick()}}>Add Count</button>
        {this.state.counter < 3 && <CounterNew value={this.state.counter} />}
        <Score
          score={this.state.counter}
          updateScore={this.handleClick}
        />
      </div>
    )
  }


}
