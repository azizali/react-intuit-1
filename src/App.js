import React from 'react';
import Box from './Box'

const data = [
  { text: 'A', id: 1 },
  { text: 'B', id: 2 },
  // { text: 'C', id: 3 },
  { text: 'D', id: 4 },
  { text: 'E', id: 5 },
]

export default function App (){
  return (
    <div>
      {data.map(({id, text}, index)=>{
        return <Box key={id}>
          #{index}: {text}
        </Box>
      })}
      {/* <Box>Content is here</Box> */}
    </div>
  )
}