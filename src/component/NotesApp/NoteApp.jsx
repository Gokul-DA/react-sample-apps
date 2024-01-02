import React, { useState } from 'react'
import Notes from './Notes'
import Header from './Header'
import Action from './Action'
import Note from './Note'

function NoteApp() {
  const [notes, setNotes] = useState([])
  const removeAll = () => {
    console.log('removeAll notes:' + notes)
    setNotes([])
  }

  const addNotes = (params) => {
    console.log('add notes param:' + JSON.stringify(params))
    setNotes([...notes, params])
  }

  const removeNote = (id) => {
    console.log('inside remove note', id)
    setNotes(
      notes.filter((note) => {
        return note.id !== id
      })
    )
  }

  console.log('add notes notes:' + JSON.stringify(notes))

  return (
    <>
      <h1>Java Sample Approach </h1>
      <Header />
      <Notes notes={notes} removeNote={removeNote} />
      {/* <Note notes={notes} removeNote={removeNote} /> */}
      <Action addNote={addNotes} removeAll={removeAll} />
      <hr></hr>
    </>
  )
}

export default NoteApp
