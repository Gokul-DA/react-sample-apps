import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md'
import { IoPersonAddOutline } from 'react-icons/io5'
import { FaRegEdit, FaSearch } from 'react-icons/fa'
import PersonForm from './PersonForm'
import axios from 'axios'

class PersonList extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    personDetails: [],
    addPersonClicked: false,
    editRecordClicked: false,
    selectedRecordToEdit: 0,
    editedPerson: {},
    filteredPersonDetails: [],
    searchString: '',
  }

  componentDidMount() {
    console.log('mounted')
    this.setPerson()
  }

  setPerson = () => {
    axios
      .get('http://localhost:3000/person')
      .then((res) => {
        this.setState({
          filteredPersonDetails: res.data,
          personDetails: res.data,
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addBtnHandler = () => {
    this.setState({ addPersonClicked: !this.state.addPersonClicked })
  }

  addPerson = (event) => {
    event.preventDefault()
    let person = {
      id: this.getNextId().toString(),
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
    }

    axios
      .post('http://localhost:3000/person', person)
      .then((res) => {
        console.log('postdata', res.data)
        this.setState(
          {
            personDetails: [...this.state.personDetails, person],
            addPersonClicked: !this.state.addPersonClicked,
          },
          () => {
            this.filterData()
          }
        )
      })
      .catch((err) => {
        console.log('error happened while posting: ', err)
      })
  }

  removePerson = (id) => {
    console.log('id to be deleted :', id)
    axios
      .delete('http://localhost:3000/person/' + id)
      .then((res) => {
        console.log('Deleted row: ', res.data.id)
        this.setState(
          {
            personDetails: [
              ...this.state.personDetails.filter((person) => {
                return person.id !== res.data.id
              }),
            ],
            // filteredPersonDetails: this.state.personDetails,
          },
          () => {
            this.filterData()
          }
        )
      })
      .catch((err) => {
        console.log('error while deleting: ', err)
      })

    // this.setState(
    //   {
    //     filteredPersonDetails: [this.state.personDetails],
    //   },
    //   () => {
    //     console.log('actual length :::', this.state.personDetails.length)
    //     console.log(
    //       'filter length :::',
    //       this.state.filteredPersonDetails.length
    //     )
    //   }
    // )

    // this.setState(
    //   {
    //     personDetails: [
    //       ...this.state.personDetails.filter((person) => {
    //         return person.id !== id
    //       }),
    //     ],
    //   },
    //   () => this.filterData()
    // )
  }

  getNextId() {
    const maxId = this.state.personDetails.reduce(
      (max, person) => (person.id > max ? person.id : max),
      -Infinity
    )
    return +maxId + 1
  }

  handleEditRecord = (id) => {
    this.setState({
      editRecordClicked: !this.state.editRecordClicked,
      selectedRecordToEdit: id,
      editedPerson: this.state.personDetails.slice(id - 1, id)[0],
    })
  }

  updatePerson = (event) => {
    event.preventDefault()
    console.log('insdie udpate')
    let updatedPerson = {
      id: this.state.selectedRecordToEdit.toString(),
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
    }

    axios
      .put('http://localhost:3000/person/' + updatedPerson.id, updatedPerson)
      .then((res) => {
        this.setState(
          (prevState) => {
            const updatedPersonDetails = prevState.personDetails.map((person) =>
              person.id === updatedPerson.id
                ? { ...person, ...updatedPerson }
                : person
            )
            return {
              personDetails: updatedPersonDetails,
              editRecordClicked: !this.state.editRecordClicked,
            }
          },
          () => this.filterData()
        )
      })
      .catch((err) => {
        console.log('error occured while put/editing: ', err)
      })
  }

  searchButtonHandler = (event) => {
    console.log('inside ', event.target.value)
    let searchString = event.target.value
    this.setState({ searchString: searchString }, () => {
      this.filterData()
      console.log('search String ' + this.state.searchString)
    })
  }

  filterData = () => {
    console.log('inside Filter')
    const { personDetails, searchString } = this.state
    const filteredData = personDetails.filter((person) =>
      person.firstName.toLowerCase().includes(searchString.toLowerCase())
    )
    this.setState({ filteredPersonDetails: filteredData })
  }

  cancelEdit = () => {
    this.setState({ editRecordClicked: !this.state.editRecordClicked })
  }

  render() {
    return (
      <>
        <br></br>
        <button
          onClick={this.addBtnHandler}
          className='btn btn-primary'
          disabled={this.state.editRecordClicked}
        >
          Add Person <IoPersonAddOutline />
        </button>
        {this.state.addPersonClicked && (
          <PersonForm addPerson={this.addPerson} />
        )}

        {this.state.editRecordClicked && (
          <PersonForm
            updatePerson={this.updatePerson}
            editedRecord={this.state.editRecordClicked}
            editedPerson={this.state.editedPerson}
            cancelEdit={this.cancelEdit}
          />
        )}
        <div style={{ float: 'right', marginRight: 10 }}>
          <input
            type='text'
            id='searchField'
            name='searchField'
            onChange={(e) => this.searchButtonHandler(e)}
          ></input>
          <label for='searchField'>
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
            {this.state.filteredPersonDetails.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.address}</td>
                  <td>
                    <button
                      className='btn btn-secondary'
                      onClick={() => this.removePerson(person.id)}
                      disabled={this.state.editRecordClicked}
                    >
                      <MdDelete />
                    </button>
                    {'   '}
                    <button
                      className='btn btn-secondary'
                      onClick={() => this.handleEditRecord(person.id)}
                      disabled={this.state.editRecordClicked}
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
