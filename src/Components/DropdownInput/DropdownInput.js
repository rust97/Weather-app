import React, {Component} from 'react'
import Spinner from './../Spinner'


export default class DropdownInput extends Component {
    state ={
        city:"",
        focus: false,
    }

    onSelected = (city) =>{
        this.props.onSelect(city);
        this.setState({
            city: `${city.name}, ${city.sys.country}`
        })
    }

    onKeyPress = e => {
        if(e.keyCode == 13){
          this.props.onSearch(this.state.city)
        }
     }

    onChange=(e)=>{
        this.setState({
            city: e.target.value
        })
    }

    onFocus = () =>{
        this.setState({
            focus: true,
        })
    }

    onBlur = () =>{
        this.setState({
            focus: false,
        })
    }
    render(){
        const { isLoading, findCities, } = this.props
        return (
            <div className="korobka">
            <input
            type="text"
            onChange={this.onChange}
            value={this.state.city}
            className="search-input"
            onKeyDown={this.onKeyPress}
            onFocus={this.onFocus}
            onBlur={this.onBlur} 
          />
          {isLoading && <Spinner />}
          {this.state.focus && <ul className={`search-list`}>
          {findCities.map(city => (
            <li key={city.id} onMouseDown={() => this.onSelected(city)}>
            <span> <p>{city.name}, <b>{city.sys.country}</b></p></span>
            <span className="temp">{city.main.temp}<p>&#8451;</p></span>
              
            </li>
          ))}
        </ul>}
        </div>
        )
    }
}