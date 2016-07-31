


 import React from 'react'
 import ReactDom from 'react-dom'
 import Header from './components/Header'
 import Body from './components/Body'
 import Topic from './components/Topic'
 import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router'

 require('./style/app.scss')

 // if(process.env.NODE_ENV == 'production'){
 //     require('./assets/sass/index.scss')
 // }

 var App = React.createClass({
     render(){
         return (
             <div className="wrapper">
                 <Header></Header>
                  {this.props.children}
             </div>
         )
     }
 })


 var div = document.createElement('div')
     div.className = 'container'

 ReactDom.render(
     <Router history={hashHistory}>
         <Route path="/" component={App}>
            <IndexRoute component={Body} />
            <Route path="topic/:id" component={Topic} />
         </Route>
     </Router>,
     document.body.appendChild(div)
 )
