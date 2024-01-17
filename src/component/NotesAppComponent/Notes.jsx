import React, { Component } from 'react'
import Note from './Note'

class Notes extends Component {
  state = {}
  render() {
    return (
      <>
        <h3>JSA Notes</h3>
        <Note notes={this.props.notes} removeNote={this.props.removeNote} />
      </>
    )
  }
}

export default Notes
