import { applyMiddleware, createStore } from 'redux'
import { countryReducer } from './reducer/country/countryReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
/*
    Si nesecitara incluir mas reducer debe deberia utilizar un metodo combineReducers de Redux
    example const combine = combineReducers({uno:unoReducer,dos:dosReducer})
*/
export const store = createStore(countryReducer, composeWithDevTools(applyMiddleware(thunk)))
