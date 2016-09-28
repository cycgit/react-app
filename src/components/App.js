import React, { Component } from 'react'
import HeaderState from '../containers/HeaderState'
import ScrollList from '../containers/ScrollList'
import { Router, Route } from 'react-router'

class App extends Component {
  render() {
    let show = this.props.location.pathname == '/' ? '':'none'
    return(
      <div className="wrapper">
        <HeaderState show={show} back={this.context.router.goBack} />
        <ScrollList show={show} />
         { this.props.children }
      </div>
    )
  }
}

// react-router context
App.contextTypes = {
  router: React.PropTypes.any
}

export default App
