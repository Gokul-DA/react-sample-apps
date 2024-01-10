import React, { Component } from 'react'

class NotFound extends Component {
  constructor(props) {
    super(props)
  }
  state = {}
  render() {
    return (
      <>
        <h1 style={{ color: 'RED' }}> Page is not found</h1>
      </>
    )
  }
}

export default NotFound
