import { useContext } from 'react'
import { notesContext } from './NoteApp'

function Note(props) {
  const notes = useContext(notesContext)
  console.log('inside note: ', notes)
  return (
    <div>
      {notes.length > 0 && (
        <ol>
          {notes.map((note) => {
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

    // <div>
    //   {props.notes.length > 0 && (
    //     <ol>
    //       {props.notes.map((note) => {
    //         return (
    //           <div>
    //             <li key={note.id}>
    //               {note.noteDescription}
    //               <button onClick={() => props.removeNote(note.id)}>
    //                 Remove
    //               </button>
    //             </li>
    //           </div>
    //         )
    //       })}
    //     </ol>
    //   )}
    // </div>
  )
}

export default Note
