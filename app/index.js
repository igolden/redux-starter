import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {AppContainer} from './containers'
import * as reducers from './redux'

const app = document.getElementById('app');
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
   <Provider store={store}>
    <AppContainer />
  </Provider>, app)

