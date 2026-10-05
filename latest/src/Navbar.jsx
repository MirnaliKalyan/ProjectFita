import React from 'react'
import Child from './Child'

function Navbar({ b }) {
  return (
    <div>
      <p>Hello Navbar {b}</p>
      <p>Welcome All</p>
      <Child b={b} />
    </div>
  )
}

export default Navbar