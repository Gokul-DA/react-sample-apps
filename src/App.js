import './App.css'
import Counter from './component/CounterApp/Counter'
import ItemsDisplay from './component/ItemDisplayApp/ItemsDisplay'
import NoteAppFunctional from './component/NotesApp/NoteApp'
import NotesAppClass from './component/NotesAppComponent/NotesApp'
import PersonList from './component/TableApp/PersonList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      {/* <Counter />
      <ItemsDisplay />
      <NoteAppFunctional></NoteAppFunctional>
      <NotesAppClass></NotesAppClass> */}

      <PersonList />
    </>
  )
}

export default App
