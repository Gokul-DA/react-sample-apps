import crudApis from '../apis/crudApis'
import { ActionTypes } from './actions-constants'

export const fetchPersons = () => {
  return (dispatch) => {
    crudApis.get('/person').then((res) => {
      console.log('response from apis: ', res.data)
      dispatch({
        type: ActionTypes.FETCH_PERSONS,
        payload: res.data,
      })
    })
  }
}

export const addPerson = (person) => {
  return (dispatch) => {
    crudApis
      .post('/person', person)
      .then((res) => {
        console.log('postdata: ', res.data)
        dispatch({
          type: ActionTypes.ADD_PERSON,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log('error happened while posting: ', err)
      })
  }
}
export const updatePerson = (updatedPerson) => {
  return (dispatch) => {
    crudApis
      .put(`http://localhost:3000/person/${updatedPerson.id}`, updatedPerson)
      .then((res) => {
        dispatch({ type: ActionTypes.UPDATE_PERSON, payload: res.data })
      })
      .catch((err) => {
        console.log('error occurred while put/editing: ', err)
      })
  }
}
export const removePerson = (id) => {
  return (dispatch) => {
    crudApis
      .delete(`/person/${id}`)
      .then((res) => {
        console.log('Deleted row: ', res.data.id)
        dispatch({
          type: ActionTypes.REMOVE_PERSON,
          payload: res.data,
        })
        // setPersonDetails((prevDetails) =>
        //   prevDetails.filter((person) => person.id !== res.data.id)
        // )
        // filterData()
      })
      .catch((err) => {
        console.log('error while deleting: ', err)
      })
  }
}
