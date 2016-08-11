import React from 'react'
import {withRouter} from 'react-router'
import Types from './Types'
require('../style/header.scss')

export default withRouter(React.createClass({

  render() {
    var params = this.props.params
    var cb = this.props.cb

    var x = null
    return (
      <div className="header">
        <div className="left">
            {params.id? <i className="iconfont icon-left" onClick={()=> {this.props.router.goBack()} }></i>: <Types cb={cb}/>}
        </div>
        {params.id? <div>帖子详情</div>: null}
        <div className="right">
          <i className="iconfont icon-reload"></i>
        </div>
      </div>
    )
  }
}))
