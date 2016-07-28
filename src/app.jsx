import React from 'react'
import ReactDom from 'react-dom'
import Menu from './components/Menu'

require('./style/app.scss')




ReactDom.render(
    <Menu/>,
    document.body.appendChild(document.createElement('div'))
)
