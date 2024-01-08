import React, { Component } from 'react'

class PersonForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          if (this.props.editedRecord) {
            this.props.updatePerson(e)
          } else {
            this.props.addPerson(e)
          }
        }}
      >
        <div className='form-group'>
          <label>First Name</label>
          <input
            type='text'
            className='form-control'
            defaultValue={
              this.props.editedRecord ? this.props.editedPerson.firstName : ''
            }
            id='firstName'
            aria-describedby='firstName'
            placeholder='Enter First Name'
          />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input
            type='text'
            className='form-control'
            defaultValue={
              this.props.editedRecord ? this.props.editedPerson.lastName : ''
            }
            id='lastName'
            aria-describedby='lastName'
            placeholder='Enter Last Name'
          />
        </div>
        <div className='form-group'>
          <label>Address</label>
          <input
            type='text'
            className='form-control'
            defaultValue={
              this.props.editedRecord ? this.props.editedPerson.address : ''
            }
            id='address'
            aria-describedby='address'
            placeholder='Enter Address'
          />
        </div>

        {this.props.editedRecord && (
          <>
            <button type='submit' className='btn btn-primary'>
              Update
            </button>
            <button
              type='reset'
              className='btn btn-primary'
              onClick={this.props.cancelEdit}
            >
              Cancel
            </button>
          </>
        )}
        {!this.props.editedRecord && (
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        )}
      </form>
    )
  }
}

export default PersonForm
