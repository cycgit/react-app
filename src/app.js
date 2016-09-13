import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'
import TopicContent from './containers/TopicContent'

let store = createStore(reducers, applyMiddleware(thunk))

let div = document.createElement('div')
div.className = 'container'

if(process.env.NODE_ENV == 'production'){
  require('./assets/sass/index')
}


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/topic/:id" component={TopicContent}/>
      </Route>
    </Router>
  </Provider>,
  document.body.appendChild(div)
)


// render(<div>hello world</div>, document.body.appendChild(div))
