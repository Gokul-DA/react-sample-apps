import React, { useState } from 'react'

function ItemsDisplay() {
  const [items, setItems] = useState(['OOPS'])

  return (
    <>
      <h1>Java Concepts</h1>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <input type='text' name='item' id='item'></input>
      <button
        onClick={() => {
          let a = document.getElementById('item')
          setItems([...items, a.value])
          a.value = ''
        }}
      >
        Add Item
      </button>
      <hr></hr>
    </>
  )
}

export default ItemsDisplay
