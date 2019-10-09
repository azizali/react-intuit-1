import './footer.css';
import React from 'react';

export default function Footer (){
  return (
    <div
      className="full-width"
      style={{
        backgroundColor: 'blue',
        borderRadius: '10px',
      }}
      // style="background-color: blue"
    >
      I AM FOOTER
      <div className="col">
        Something
      </div>
    </div>
  )
}
