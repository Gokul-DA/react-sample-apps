import React from 'react'
import Note from './Note'

function Notes(props) {
  return (
    <>
      <h3>JSA Notes</h3>
      <Note removeNote={props.removeNote} />
      {/* <Note notes={props.notes} removeNote={props.removeNote} /> */}
    </>
  )
}

export default Notes
