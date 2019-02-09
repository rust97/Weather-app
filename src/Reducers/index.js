import { combineReducers } from 'redux'
import { cityReducer } from './city'

export const rootReducer = combineReducers({
  city: cityReducer,
})