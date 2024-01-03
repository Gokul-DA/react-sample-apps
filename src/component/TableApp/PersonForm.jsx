import React, { Component } from 'react'

class PersonForm extends Component {
  constructor(props) {
    super(props)
  }
  state = {}
  render() {
    return (
      <form onSubmit={(e) => this.props.addPerson(e)}>
        <div className='form-group'>
          <label>First Name</label>
          <input
            type='text'
            className='form-control'
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
            id='address'
            aria-describedby='address'
            placeholder='Enter Address'
          />
        </div>
        {this.props.editedRecord && (
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
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
