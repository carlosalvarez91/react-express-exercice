import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCountriesMatch} from '../../store/actions/country'


class CountriesMatch extends Component {

  static propTypes = {
    getCountriesMatch: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired
  }

  static defaultProps = {
    countries: []
  }

  componentWillMount() {
    this.props.getCountriesMatch();
  }

  render() {

    return (
      <div>
        <h2>Question 2</h2>
        <p>
        Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function
        that returns a list of countries where their name matches at least a part of one of these string
        use the Node back end and send it to the front end.
        </p>
          <ul className="list" >
            {this.props.countries.map(country =>
              <li className="item" key={country.name}>{country.name} </li>
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
   getCountriesMatch: () => dispatch(getCountriesMatch())
})

export default connect(mapStateToProps, dispatchToProps)(CountriesMatch);
