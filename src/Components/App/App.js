import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from '../Form/Form'

import './App.scss'
import CitiesList from '../CitiesList/CitiesList';


class App extends Component {
  render() {
    const {cities} = this.props;
    return (
      <div className="main-wrap">
        <Form />
        <CitiesList cities={cities} />

      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    cities: store.city.cities,
  }
}

const mapDispatchToProps = dispatch => {
  return {
   /* addCity: (name, country, temp, cityId) =>
      dispatch(addCity(name, country, temp, cityId)),
    updateCity: (id, temp) => dispatch(updateCity(id, temp)),*/
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)