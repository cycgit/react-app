import React from 'react'
import HeaderState from '../containers/HeaderState'
import ScrollList from '../containers/ScrollList'
import { Router, Route } from 'react-router'

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.any
  },
  render(){
    let show = this.props.location.pathname == '/' ? '':'none'
    return(
      <div className="wrapper">
         <HeaderState show={show} back={this.context.router.goBack}/>
          <ScrollList show={show}/>
         { this.props.children }
      </div>
    )
  }
})


export default App
