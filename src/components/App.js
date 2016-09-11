import React from 'react'
import HeaderState from '../containers/HeaderState'
import ScrollList from '../containers/ScrollList'
import { Router, Route } from 'react-router'



// const App = ({children}) => (
//     <div className="wrapper">
//       <HeaderState/>
//       <ScrollList/>
//       { children }
//     </div>
// )

const App = React.createClass({
  render(){
    let show = this.props.location.pathname == '/' ? '':'none'
    return(
      <div className="wrapper">
         <HeaderState/>
          <ScrollList show={show}/>
         { this.props.children }
      </div>
    )
  }
})


export default App
