import React from 'react'

require('../style/header.scss')

export default React.createClass({
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  },
  render() {

    return (
      <div className="header">
        <div>二胖手</div>
        <div className="ops">
          <i className="iconfont icon-edit"></i>
          <i className="iconfont icon-reload"></i>
        </div>
      </div>
    )
  }
})
