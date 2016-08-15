import React from 'react'
import Types from './Types'
require('../style/header.scss')

const Header = ( {source, header, onToggle, onCheck} ) => (
  <div className="header">
    <div className="left">
      <Types source={source} header={header} onToggle={onToggle} onCheck={onCheck}/>
    </div>
    <div className="right">
        <i className="iconfont icon-reload"></i>
   </div>
  </div>
)

export default Header
