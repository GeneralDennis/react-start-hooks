import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter ] = useState(10)
  return (
    <div>
      <button onClick={()=> setCounter(counter - 1)}>-</button>
      <div onClick={()=> setCounter(0)}>{counter}</div>
      <button onClick={()=> setCounter(counter + 1)}>+</button>
    </div>
  )
}

