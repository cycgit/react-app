import React from 'react'
import Types from './Types'
require('../style/header.scss')

const Header = ({ source, header, onToggle, onCheck, show, onBack, onReload }) => (
  <div className="header">
    {
      show? (<span onClick={onBack}><i className="iconfont icon-rollback"></i></span>):
       (<div className="left">
        <Types source={source} header={header} onToggle={onToggle} onCheck={onCheck}/>
       </div>)
    }

    { show? <span>帖子正文</span>: null }

    <div className="right">
      <i className="iconfont icon-reload" onClick={onReload}></i>
    </div>
  </div>
)

export default Header
