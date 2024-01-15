import React, { Component } from 'react'

class PersonDetails extends Component {
  constructor(props) {
    super(props)
  }

  state = {}
  render() {
    return (
      <>
        Name:{this.props.selectedPerson.firstName}
        <br />
        Id: {this.props.selectedPerson.id}
      </>
    )
  }
}

export default PersonDetails
