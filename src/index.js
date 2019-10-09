// React is just a library for creating components

// react-dom
// DOM Document Object Model = Browser

// react-native
// Mobile Apps.

import React from 'react';
import ReactDOM from 'react-dom';

// Capitalized
// Return a user Interface
// One parent
function App (){
  return (
    <div>
      <div>First Div</div>
      <div>Second Div</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
