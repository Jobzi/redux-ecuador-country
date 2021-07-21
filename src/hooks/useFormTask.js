import { useReducer } from 'react'

export const KEY_REDUCER = {
  FORM_INIT: ' @form_task/init',
  FORM_CLEAN: '@form_task/clean'
}
const INITAL_STATE = {
  task: ''
}
const formReducer = (state, action) => {
  switch (action.type) {
    case KEY_REDUCER.FORM_INIT: {
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    }
    case KEY_REDUCER.FORM_CLEAN:
      return INITAL_STATE
    default:
      return state
  }
}

const useNewItem = () => {
  return useReducer(formReducer, INITAL_STATE)
}

export default useNewItem
