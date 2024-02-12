import React from 'react'
let idCounter = 0
function Action(props) {
  const addButtonHandler = () => {
    props.addNote({
      id: ++idCounter,
      noteDescription: document.getElementById('noteDescription').value,
    })
    document.getElementById('noteDescription').value = ''
  }

  return (
    <div>
      <input type='text' id='noteDescription' name='noteDescription' />
      <button onClick={addButtonHandler}>Add</button>
      <br></br>
      <button onClick={props.removeAll}>Remove All</button>
    </div>
  )
}

export default Action
