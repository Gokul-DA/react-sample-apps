import React, { useState } from 'react'

function Counter() {
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(++count)
  }
  const decrement = () => {
    setCount(--count)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h6>Count: {count}</h6>
      <button onClick={increment}>Add+</button>
      <button onClick={decrement}>Minus-</button>
      <hr></hr>
    </>
  )
}

export default Counter
