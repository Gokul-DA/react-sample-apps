import './App.css'
import Counter from './component/CounterApp/Counter'
import ItemsDisplay from './component/ItemDisplayApp/ItemsDisplay'
import NoteAppFunctional from './component/NotesApp/NoteApp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './component/Home'
import NotFound from './component/NotFound'
import PersonDetails from './component/TableApp/PersonDetails'
import { useState, useEffect } from 'react'
import PersonListF from './component/TableApp/PersonListF'
function App() {
  const navigate = useNavigate()
  const [selectedPerson, setselectedPerson] = useState({})
  useEffect(() => {
    // Redirect to the home page
    // navigate('/home')
  }, [])
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/home' className='navbar-brand'>
          LocalHost
        </Link>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink to='/counter' className='nav-link'>
                Counter
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/items' className='nav-link'>
                ItemsDisplay
              </NavLink>
            </li>{' '}
            <li className='nav-item'>
              <NavLink to='/notes' className='nav-link'>
                Notes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/person' className='nav-link'>
                Person
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contactUs' className='nav-link'>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        {/* <Route path='/' element={<>{navigate('/home')}</>}></Route> */}
        <Route path='/home' element={<Home />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/items' element={<ItemsDisplay />}></Route>
        <Route path='/notes' element={<NoteAppFunctional />}></Route>
        <Route
          path='/person'
          element={
            <PersonListF
              navigate={navigate}
              setselectedPerson={setselectedPerson}
            />
          }
        >
          <Route index element={<h1> Profile</h1>}></Route>
          <Route path='profile' element={<h1> Profile</h1>}></Route>
          <Route
            path=':id'
            element={
              <PersonDetails selectedPerson={selectedPerson}></PersonDetails>
            }
          ></Route>
          <Route
            path='contactDetails'
            element={<h1>Contact Details</h1>}
          ></Route>
          <Route></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
