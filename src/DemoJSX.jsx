import React from 'react'
import Footer from './Footer'
export default function DemoJSX (){
  return React.createElement(
    'div',
    {
      id: 'a'
    },
    [
      React.createElement('span', null, 'Span Content'),
      React.createElement('img', { src: ''}),
      React.createElement(Footer, {
        name: 'Test name'
      })
    ]
  )
}

// export default function DemoJSX (){
//   return (
//     <div id="a">
//       <span>Span content</span>
//       <img src="" />
//       <Header />
//     </div>
//   )
// }