import React, { Component, setState } from 'react'

class Note extends Component {
  constructor(props) {
    super(props)
  }
  state = {}

  render() {
    return (
      <>
        {
          <div>
            <ol>
              {console.log('insdie note ', this.props.notes)}
              {this.props.notes.map((note) => (
                <li key={note.id}>
                  {note.noteDescription}
                  <button onClick={() => this.props.removeNote(note.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ol>
          </div>
        }
      </>
    )
  }
}

export default Note
