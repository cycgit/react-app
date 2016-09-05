import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'


let store = createStore(reducers, applyMiddleware(thunk))

let div = document.createElement('div')
div.className = 'container'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(div)
)
