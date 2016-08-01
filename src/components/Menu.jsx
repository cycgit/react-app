import React from 'react'

export default React.createClass({
  getInitialState() {
    return {active: 1}
  },
  handleClick(num) {
    if (num == this.state.active)
      return

    this.setState({active: num})
    // this.props.change(num)
  },
  render() {
    var active = this.state.active

    return (
      <div className="menu">

        <div className={active == 1
          ? 'tab active'
          : 'tab'} onClick={() => {
          this.handleClick(1)
        }}>
          <i className="iconfont icon-book"></i>
          <span>全部</span>
        </div>
        <div className={active == 2
          ? 'tab active'
          : 'tab'} onClick={() => {
          this.handleClick(2)
        }}>
          <i className="iconfont icon-save"></i>
          <span>招聘</span>
        </div>
        <div className={active == 3
          ? 'tab active'
          : 'tab'} onClick={() => {
          this.handleClick(3)
        }}>
          <i className="iconfont icon-tags"></i>
          <span>收藏</span>
        </div>
        <div className={active == 4
          ? 'tab active'
          : 'tab'} onClick={() => {
          this.handleClick(4)
        }}>
          <i className="iconfont icon-user"></i>
          <span>我</span>
        </div>
      </div>
    )
  }
})
