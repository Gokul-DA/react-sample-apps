import './App.css'
import Counter from './component/Counter'
import ItemsDisplay from './component/ItemsDisplay'
import NoteAppFunctional from './component/NotesApp/NoteApp'
import NotesAppClass from './component/NotesAppComponent/NotesApp'
function App() {
  return (
    <>
      <Counter />
      <ItemsDisplay />
      <NoteAppFunctional></NoteAppFunctional>
      <NotesAppClass></NotesAppClass>
    </>
  )
}

export default App
