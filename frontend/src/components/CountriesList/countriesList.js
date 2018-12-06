import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCountries} from '../../store/actions/country'
import {getCountriesList} from '../../store/actions/country'


class CountriesList extends Component {

  static propTypes = {
    getCountriesList: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired
  }

  static defaultProps = {
    countries: []
  }

  componentWillMount() {
    this.props.getCountriesList();
  }

  render() {

    return (
      <div>
        <h2>Question 3</h2>
        <p>
        Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function
        that returns a list of countries where their name matches at least a part of one of these string
        use the Node back end and send it to the front end.
        </p>
          <ul>
            {this.props.countries.map(country =>
              <li key={country.name}>{country.name} </li>
            )}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.countries
})

const dispatchToProps = (dispatch) => ({
   getCountriesList: () => dispatch(getCountriesList())
})

export default connect(mapStateToProps, dispatchToProps)(CountriesList);
