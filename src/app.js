import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './components/App'

let store = createStore(reducers)

let div = document.createElement('div')
div.className = 'container'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(div)
)
