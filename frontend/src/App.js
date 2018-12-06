import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Countries from './components/Countries/countries'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <Countries/>
        </div>
      </Provider>
    )
  }
}

export default App
