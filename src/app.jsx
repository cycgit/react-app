import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import Topic from './components/Topic'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'

require('./style/app.scss')

if (process.env.NODE_ENV == 'production') {
  require('./assets/sass/index.scss')
}

var App = React.createClass({
  getDefaultProps() {
    return {
        data: 1,
        cb(type){

        }
    }
  },
  getInitialState() {

    let pathname = this.props.location.pathname

    return {
      showList: pathname == '/'? true : false,
      type: 'all'
    }
  },
  componentWillReceiveProps(nextProps) {
    let pathname = nextProps.location.pathname
    if (pathname == '/') {
      this.setState({showList: true})
    } else {
      this.setState({showList: false})
    }
  },
  render() {
    var params = this.props.params
    var cb = this.props.cb
    var showList = this.state.showList
    return (
      <div className="wrapper">
        <Header params={params} getBack={this.getBack} cb={cb}></Header>
        <Body show={showList} type={this.state.type}/> {this.props.children}
      </div>
    )
  }
})

var div = document.createElement('div')
div.className = 'container'

ReactDom.render(
  <Router history={hashHistory}>
  <Route path="/" component={App}>
    {/* <IndexRoute component={Body}/> */}
    <Route path="topic/:id" component={Topic}/>
  </Route>
</Router>, document.body.appendChild(div))
