import weatherService from '../WeatherService'
import { FIND_CITY, FIND_CITY_SUCCEEDED, ADD_CITY, UPDATE_CITY, UPDATE_CITY_SUCCEEDED, REMOVE_CITY } from '../constants/city'

export function findCity(name) {
  return async dispatch => {
    dispatch({
      type: FIND_CITY,
    })
    const findCities = await weatherService.findCity(name)
    dispatch({
      type: FIND_CITY_SUCCEEDED,
      findCities,
    })
  }
}

export function addCity(city) {
  return  {
      type: ADD_CITY,
      city,
  }
}

export function updateCity(id) {
  return async dispatch => {
    dispatch({
      type: UPDATE_CITY,
    })
    const updateCityMain = await weatherService.update(id)
    dispatch({
      type: UPDATE_CITY_SUCCEEDED,
      updateCityMain,
      id
    })
  }
}

export function removeCity(id){
  return {
    type: REMOVE_CITY,
    id
  }
}