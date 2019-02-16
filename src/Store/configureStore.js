import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from '../Reducers'
import thunk from 'redux-thunk'

function saveToLocalStorage(state) {
  try {
    const localState = JSON.stringify(state)
    localStorage.setItem('cities', localState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const localState = localStorage.getItem('cities')
    if (localState === null) return undefined
    return JSON.parse(localState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger)
)

store.subscribe(() => saveToLocalStorage(store.getState()))
