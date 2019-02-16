import {
  ADD_CITY,
  REMOVE_CITY,
  UPDATE_CITY,
  UPDATE_CITY_SUCCEEDED,
  FIND_CITY,
  FIND_CITY_SUCCEEDED,
} from '../constants/city'

const initialState = {
  isLoading: false,
  findCities: [],
  cities: [],
  isUpdate: false,
}

export function cityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.city],
        findCities: [],
      }
    case REMOVE_CITY:
      return {
        ...state,
        cities: [
          ...state.cities.slice(0, action.id),
          ...state.cities.slice(action.id + 1),
        ],
      }
    case UPDATE_CITY:
      return {
        ...state,
        isUpdate: true,
      }
    case UPDATE_CITY_SUCCEEDED:
      return {
        ...state,
        isUpdate: false,
        cities: state.cities.map(city => {
          if (city.id === action.id)
            return { ...city, main: action.updateCityMain }
          else return city
        }),
      }
    case FIND_CITY:
      return {
        ...state,
        isLoading: true,
      }
    case FIND_CITY_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        findCities: action.findCities,
      }
    default:
      return state
  }
}
