import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import Menu from './components/Menu'

require('./style/app.scss')


var div = document.createElement('div')
    div.className = 'container'

ReactDom.render(
    <div className="wrapper">
        <Header></Header>
        <Body></Body>
        <Menu></Menu>
    </div>,
    document.body.appendChild(div)
)
