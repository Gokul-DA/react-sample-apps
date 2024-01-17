import React, { Component } from 'react'

class Action extends Component {
  state = { idCounter: 0 }
  render() {
    return (
      <div>
        <input type='text' id='noteDescription1' />
        <button
          onClick={() => {
            let a = document.getElementById('noteDescription1').value
            let note = { id: this.state.idCounter + 1, noteDescription: a }
            console.log('after add ', note)
            this.props.addNotes(note)
          }}
        >
          Add
        </button>
        <br />
        <button onClick={this.props.removeAll}>Remove All</button>
      </div>
    )
  }
}

export default Action
