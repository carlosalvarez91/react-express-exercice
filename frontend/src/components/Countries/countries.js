import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCountries} from '../../store/actions/country'


class Countries extends Component {

  static propTypes = {
    getCountries: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired
  }

  static defaultProps = {
    countries: []
  }

  componentWillMount() {
    this.props.getCountries();
  }

  render() {

    return (
      <div>
        <h2>Question 1</h2>
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
   getCountries: () => dispatch(getCountries())
})

export default connect(mapStateToProps, dispatchToProps)(Countries);
