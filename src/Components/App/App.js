import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../Form'
import './App.scss'
import CitiesList from '../CitiesList/CitiesList'

class App extends Component {
  render() {
    const { cities } = this.props
    return (
      <div className="main-wrap">
        <header>
          {' '}
          <h1 className="header">Следи за погодой</h1>{' '}
        </header>
        <Form />
        <CitiesList cities={cities} />
        <footer>
          {' '}
          <p>Written by Tulaganov Rustam ©</p>
          <p>Using React and Redux</p>{' '}
        </footer>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    cities: store.city.cities,
  }
}

export default connect(mapStateToProps)(App)
