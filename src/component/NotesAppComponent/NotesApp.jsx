import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Notes from './Notes'
class NotesApp extends Component {
  state = { notes: [] }

  addNotes = (params) => {
    console.log('input value' + params.noteDescription)
    this.setState({ notes: [...this.state.notes, params] })
  }

  removeNote = (id) => {
    console.log('input id ', id)
    let result = this.state.notes.filter((note) => {
      return note.id !== id
    })
    console.log('inside remove result', result)
    this.setState({ notes: result })
  }
  removeAll = () => {
    this.setState({ notes: [] })
  }
  render() {
    return (
      <>
        <h1>Java Sample Approach</h1>
        <Header />
        <Notes notes={this.state.notes} removeNote={this.removeNote}></Notes>
        <Action
          notes={this.state.notes}
          addNotes={this.addNotes}
          removeAll={this.removeAll}
        />
        <hr></hr>
      </>
    )
  }
}

export default NotesApp
