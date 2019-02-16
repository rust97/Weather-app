import React, { Component } from 'react'
import { updateCity, removeCity } from '../../Actions/cityActions'
import { connect } from 'react-redux'
import Spinner from '../Spinner'

class CitiesList extends Component {
  onUpdate = id => {
    this.props.updateCity(id)
  }
  render() {
    const { cities, isUpdate } = this.props
    return (
      <div className="cities-list-wrap">
        <ul className="cities-list">
          {cities.map((city, index) => (
            <li key={city.id}>
              <span>
                <p>
                  {city.name}, <b>{city.sys.country}</b>
                </p>
              </span>
              {isUpdate ? (
                <Spinner />
              ) : (
                <span className="temp">
                  {city.main.temp}
                  <p>&#8451;</p>
                  <a
                    className="close"
                    href="#"
                    onClick={() => this.props.removeCity(index)}
                  />
                  <a onClick={() => this.onUpdate(city.id)} className="arrow" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isUpdate: state.city.isUpdate,
})

const mapDispatchToProps = dispatch => ({
  updateCity: id => dispatch(updateCity(id)),
  removeCity: id => dispatch(removeCity(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesList)
