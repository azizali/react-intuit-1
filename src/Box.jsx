import React from 'react';

export default function Box ({children}){
  return(
    <div style={{
      border: '2px solid blue',
      borderRadius: '2/3',
    }}>
      {children}
    </div>
  )
}