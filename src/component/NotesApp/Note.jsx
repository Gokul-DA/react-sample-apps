function Note(props) {
  return (
    <div>
      {props.notes.length > 0 && (
        <ol>
          {props.notes.map((note) => {
            return (
              <div>
                <li key={note.id}>
                  {note.noteDescription}
                  <button onClick={() => props.removeNote(note.id)}>
                    Remove
                  </button>
                </li>
              </div>
            )
          })}
        </ol>
      )}
    </div>
  )
}

export default Note
