import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCountriesList} from '../../store/actions/country'
import {setFilter} from '../../store/actions/filter';
import filterReducer from '../../store/reducers/filter';
import {createStore} from 'redux';
import '../../App.css'
import { Input } from 'antd';

const store = createStore(filterReducer);

class CountriesList extends Component {
  constructor() {
    super();

    this.state = store.getState();

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })

    this.handleFilter = this.handleFilter.bind(this);
  }


  static propTypes = {
    getCountriesList: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired
  }

  static defaultProps = {
    countries: []
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  componentWillMount() {
    this.props.getCountriesList();
  }
  handleFilter(e) {
    store.dispatch(setFilter(e.target.value))
   }
  render() {
    let items = []
    this.props.countries.forEach(element => {
      items.push(element.name)
    });
    const { filterBy } = this.state;
    const List = ({items, filterBy}) => {
      return (
        <ul className="list">
          {
            items
              .filter((item) => item.indexOf(filterBy) > -1)
              .map(
              (item, index) => <li className="item" key={index}>{item}</li>
            )
          }
        </ul>
      )
    }
    return (
      <div>
        <h2>Question 3</h2>
        <p>
          Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries
          and a field to filter the country by name.
        </p>
      

        <Input placeholder="Enter country name to filter" onChange={this.handleFilter}/>
          <ul>
            <List items={items} filterBy={filterBy} />
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
