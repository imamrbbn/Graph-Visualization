import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import PhysicalCharsReducer from './reducers/PhysicalCharsReducer'

const reducer = combineReducers({
  PhysicalCharsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store