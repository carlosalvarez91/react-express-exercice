import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import { Provider } from 'react-redux'
import './App.css'
import store from './store'

import 'antd/dist/antd.css';
import CustomLayout from './Layout';

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <Router>
            <CustomLayout>
                <BaseRouter/>
            </CustomLayout>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
