import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md'
import { IoPersonAddOutline } from 'react-icons/io5'
import { FaRegEdit } from 'react-icons/fa'
import PersonForm from './PersonForm'
class PersonList extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    idCounter: 0,
    personDetails: [
      {
        id: this.getNextId,
        firstName: 'Gokul',
        lastName: 'S',
        address: 'ABC',
      },
      {
        id: this.getNextId,
        firstName: 'Deepan',
        lastName: 'K',
        address: 'DEF',
      },
      {
        id: this.getNextId,
        firstName: 'Tharun',
        lastName: 'D',
        address: 'XYZ',
      },
    ],
    addPersonClicked: false,
    editedRecord: false,
    selectedRecordToEdit: 0,
  }

  addBtnHandler = () => {
    this.setState({ addPersonClicked: !this.state.addPersonClicked })
  }

  addPerson = (event) => {
    event.preventDefault()
    let person = {
      id: this.getNextId,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
    }
    this.setState({ personDetails: [...this.state.personDetails, person] })
  }

  getNextId = () => {
    this.setState({ idCounter: ++this.state.idCounter })
    return this.state.idCounter
  }

  handleEditedRecord = (id) => {
    let person = this.state.personDetails.filter((person) => {
      return (person.id = id)
    })
    console.log('selected record ' + person)
    this.setState({
      addPersonClicked: !this.state.addPersonClicked,
      editedRecord: !this.state.editedRecord,
      selectedRecordToEdit: id,
    })
  }

  removePerson = (id) => {
    this.setState({
      personDetails: [
        ...this.state.personDetails.filter((person) => {
          return person.id !== id
        }),
      ],
    })
  }

  getEditedPerson = () => {
    return this.state.personDetails.filter((person) => {
      return (person.id = this.state.selectedRecordToEdit)
    })
  }

  render() {
    return (
      <>
        <br></br>
        <button
          onClick={this.addBtnHandler}
          className='btn btn-primary'
          disabled={this.state.editedRecord}
        >
          Add Person <IoPersonAddOutline />
        </button>
        {this.state.addPersonClicked && (
          <PersonForm
            addPerson={this.addPerson}
            editedRecord={this.state.editedRecord}
            editedPerson={this.getEditedPerson}
          />
        )}
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
            {this.state.personDetails.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.address}</td>
                  <td>
                    <button
                      className='btn btn-secondary'
                      onClick={() => this.removePerson(person.id)}
                    >
                      <MdDelete />
                    </button>
                    {'   '}
                    <button
                      className='btn btn-secondary'
                      onClick={() => this.handleEditedRecord(person.id)}
                    >
                      <FaRegEdit />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default PersonList
