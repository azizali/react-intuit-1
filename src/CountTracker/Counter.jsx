import React, { Component } from 'react';

// PROPS
// STATE = 
export default class Counter extends Component{
  // @babel/plugin-proposal-class-properties
  // state = {
  //   counter: 'abc'
  // }
  
  constructor(props){
    super(props);
    // this.state has to be an object
    this.state = {
      name: 'abc',
      counter: props.default,
      // counter: this.props.default
    }

    this.handleClickTwo = this.handleClickTwo.bind(this);
  }

  handleClickOne(){

  // THIS REQUIRES @babel/plugin-proposal-class-properties
  // handleClickOne = (event) => {

      // this.setState({
      //   counter: this.state.counter + 1
      // })

      this.setState((prevState, prevProp)=>{
        console.log(prevState, prevProp);
        return {
          counter: prevState.counter + 1
        }
      }, ()=>{
        console.log('DONE', this.state.counter);
      })

      console.log('AFTER SET-STATE', this.state.counter);
      
      // WRONG WAY
      // this.state.counter = this.state.counter + 1
  }

  handleClickTwo(){
    this.setState({
      counter: this.state.counter - 1
    })
  }

  nameOfMethod(){ }
  render(){
    console.log('Render was called');
    return(
      <div>
        Counter info Class <br/>
        State.Counter: {this.state.counter} <br/>
        Props.default: {this.props.default} <br/>
        <button onClick={this.handleClickOne.bind(this)}>
          {this.state.counter}
        </button>
        <button onClick={this.handleClickTwo}>
          Button Two
        </button>
      </div>
    )
  }
}

// export default function Counter (){
//   return(
//     <div>Counter info</div>
//   )
// }