import React, { useState, useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import { IoPersonAddOutline } from 'react-icons/io5'
import { FaRegEdit, FaSearch } from 'react-icons/fa'
import PersonForm from './PersonForm'
import { Link, Outlet } from 'react-router-dom'
import {
  fetchPersons,
  addPerson as addPersonAction,
  removePerson as removePersonAction,
  updatePerson as updatePersonAction,
} from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const PersonListF = ({ setselectedPerson, navigate }) => {
  const dispatch = useDispatch()
  //   const [personDetails, setPersonDetails] = useState([])
  const personDetails = useSelector(
    (commonReducer) => commonReducer.personDetails
  )
  const [addPersonClicked, setAddPersonClicked] = useState(false)
  const [editRecordClicked, setEditRecordClicked] = useState(false)
  const [selectedRecordToEdit, setSelectedRecordToEdit] = useState(0)
  const [editedPerson, setEditedPerson] = useState({})
  const [filteredPersonDetails, setFilteredPersonDetails] = useState([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    dispatch(fetchPersons())
  }, [dispatch])

  const addBtnHandler = () => {
    setAddPersonClicked(!addPersonClicked)
  }

  const addPerson = (data) => {
    const person = {
      id: getNextId().toString(),
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    }

    dispatch(addPersonAction(person))
    setAddPersonClicked(!addPersonClicked)
  }

  const removePerson = (id) => {
    console.log('id to be deleted :', id)

    dispatch(removePersonAction(id))
  }

  const getNextId = () => {
    const maxId = personDetails.reduce(
      (max, person) => (person.id > max ? person.id : max),
      -Infinity
    )
    return +maxId + 1
  }

  const handleEditRecord = (id) => {
    setEditRecordClicked(!editRecordClicked)
    setSelectedRecordToEdit(id)
    setEditedPerson(personDetails.find((person) => person.id === id))
  }

  const updatePerson = (data) => {
    const updatedPerson = {
      id: selectedRecordToEdit.toString(),
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    }

    dispatch(updatePersonAction(updatedPerson))
    setEditRecordClicked(!editRecordClicked)
  }

  const searchButtonHandler = (event) => {
    const searchString = event.target.value
    setSearchString(searchString)
  }

  useEffect(() => {
    console.log('inside ajhsdlajksh')
    console.log('insdie: ', personDetails)
    filterData()
  }, [searchString, personDetails])

  const filterData = () => {
    console.log('inside Filter')
    const filteredData = personDetails.filter((person) =>
      person.firstName.toLowerCase().includes(searchString.toLowerCase())
    )
    setFilteredPersonDetails(filteredData)
  }

  const cancelEdit = () => {
    setEditRecordClicked(!editRecordClicked)
  }

  const rowClickHandler = (id) => {
    setselectedPerson(personDetails.find((person) => person.id === id))
    navigate(`/person/${id}`)
    console.log('Row Clicked: ', id)
  }

  return (
    <>
      <nav>
        <Link className='navbar' index to='profile'>
          Profile
        </Link>
        <Link className='navbar' to='contactDetails'>
          Contact Details
        </Link>
      </nav>
      <Outlet></Outlet>
      <br></br>
      <button
        onClick={addBtnHandler}
        className='btn btn-primary'
        disabled={editRecordClicked}
      >
        Add Person <IoPersonAddOutline />
      </button>
      {addPersonClicked && <PersonForm addPerson={addPerson} />}

      {editRecordClicked && (
        <PersonForm
          updatePerson={updatePerson}
          editedRecord={editRecordClicked}
          editedPerson={editedPerson}
          cancelEdit={cancelEdit}
        />
      )}
      <div style={{ float: 'right', marginRight: 10 }}>
        <input
          type='text'
          id='searchField'
          name='searchField'
          onChange={(e) => searchButtonHandler(e)}
        ></input>
        <label htmlFor='searchField'>
          <FaSearch />
        </label>
      </div>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPersonDetails.map((person) => (
            <tr onClick={() => rowClickHandler(person.id)} key={person.id}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.address}</td>
              <td>
                <button
                  className='btn btn-secondary'
                  onClick={() => removePerson(person.id)}
                  disabled={editRecordClicked}
                >
                  <MdDelete />
                </button>
                {'   '}
                <button
                  className='btn btn-secondary'
                  onClick={() => handleEditRecord(person.id)}
                  disabled={editRecordClicked}
                >
                  <FaRegEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PersonListF
