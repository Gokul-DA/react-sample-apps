import { ActionTypes } from './actions-constants'

const initialState = {
  personDetails: [],
}

export const commonReducer = (state = initialState, action) => {
  console.log('payload in reducers: ', action.payload)
  console.log('type in reducers: ', action.type)
  switch (action.type) {
    case ActionTypes.FETCH_PERSONS:
      return {
        ...state,
        personDetails: [...action.payload],
      }
    case ActionTypes.ADD_PERSON:
      return {
        ...state,
        personDetails: [...state.personDetails, action.payload],
      }
    case ActionTypes.REMOVE_PERSON:
      return {
        ...state,
        personDetails: state.personDetails.filter(
          (person) => person.id !== action.payload.id
        ),
      }
    case ActionTypes.UPDATE_PERSON:
      return {
        ...state,
        personDetails: state.personDetails.map((person) =>
          person.id === action.payload.id
            ? { ...person, ...action.payload }
            : person
        ),
      }
    default:
      return state
  }
}
