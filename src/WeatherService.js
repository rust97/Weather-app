import axios from 'axios'

const API_KEY = '8069d90ff10a81006e868cea9a356e56'

const weatherService = {
  async findCity(name) {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/find?q=${name}&type=like&units=metric&APPID=${API_KEY}`
    )
    return data.list
  },
  
  async update(id) {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&type=like&units=metric&appid=${API_KEY}`
    )
    return data.main
  },
}

export default weatherService