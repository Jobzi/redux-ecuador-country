import { getAll } from '../../services/country'

// Si se usara typescrip podria utilizar enum para hacer lo mismo
export const KEY_REDUCER = {
  COUNTRY_INIT: '@country/init',
  COUNTRY_UPDATE: '@country/update'
}

export const countryReducer = (state = [], action) => {
  console.log('State', state)
  console.log('Action', action)
  switch (action.type) {
    case KEY_REDUCER.COUNTRY_INIT:
      return action.payload
    case KEY_REDUCER.COUNTRY_UPDATE:
      return { ...state }
    default:
      return state
  }
}

export const getAllCountry = country => {
  return {
    type: KEY_REDUCER.COUNTRY_INIT,
    payload: country
  }
}

// * ACTION: metodo para iniciar todas las notas al backenduse @getAllCountry, usuando el midlewarethunk
export const getAllCountryAction = () => {
  return async (dispatch) => {
    const country = await getAll()
    dispatch(getAllCountry(country))
  }
}
