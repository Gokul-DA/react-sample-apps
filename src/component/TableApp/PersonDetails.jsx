import React from 'react'

function PersonDetails(props) {
  return (
    <>
      Name:{props.selectedPerson.firstName}
      <br />
      Id: {props.selectedPerson.id}
    </>
  )
}

export default PersonDetails
