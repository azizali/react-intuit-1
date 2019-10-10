import React, { Component } from 'react';

export default function Score({ score, updateScore}){
    return(
      <div style={{
        border: "2px solid red",
        padding: '10px'
      }}>
        Score: {score}
        <button onClick={()=> { updateScore(5) }}>Change the score</button>
      </div>
    )
}

// export default class Score extends Component{
//   render(){
//     return(
//       <div style={{
//         border: "2px solid red",
//         padding: '10px'
//       }}>
//         Score: {this.props.score}
//         <button onClick={()=> { this.props.updateScore(5) }}>Change the score</button>
//       </div>
//     )
//   }
// }
