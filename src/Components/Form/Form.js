import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findCity, addCity } from '../../Actions/cityActions'
import { connect } from 'react-redux'


import './Form.scss'
import DropdownInput from '../DropdownInput/DropdownInput';


class Form extends Component {

  state = {
    selected: ''
  }

  onAdd = () =>{
    this.props.addCity(this.state.selected);
  }

  handleClick = (city) =>{

    this.setState({
      selected: city
    }, ()=> console.log(this.state.selected.id))
    
  }

  onSearch = (name) =>{
    this.props.findCity(name);
  }

  render() {
    const { isLoading, findCities } = this.props
    return (
      <div className="search-wrap">
        <div className="search-p">
          <DropdownInput isLoading={isLoading} findCities={findCities} 
          onSearch={this.onSearch} onSelect={this.handleClick}

          />
        </div>
        <button className="submit" onClick={this.onAdd}>добавить</button>
        
        
        
      </div>
    )
  }
}

Form.propTypes = {
  addCity: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.city.isLoading,
  findCities: state.city.findCities,
  cities: state.city.cities,
})

const mapDispatchToProps = dispatch => ({
  findCity: name => dispatch(findCity(name)),
  addCity: city => dispatch(addCity(city)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)