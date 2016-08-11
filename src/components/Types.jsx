import React from 'react'

require('../style/types.scss')
export default React.createClass({
  getDefaultProps() {
      return {
          type: 'all'
      }
  },
  getInitialState() {
    return {
      show: false,
      select: 'all',
      source: [
        {
          type: 'all',
          name: '全部'
        }, {
          type: 'job',
          name: '工作'
        }, {
          type: 'share',
          name: '分享'
        }, {
          type: 'ask',
          name: '问答'
        }
      ]
    }
  },
  componentDidMount() {
  },
  select() {
    this.setState({
      show: !this.state.show
    })
  },
  click(type) {
      if(this.props.type != type){
           this.props.cb(type)
      }

  },
  render() {
    let {show, source} = this.state
    let selectType = this.props.type
    let style = show
      ? {
        display: 'inherit'
      }
      : {
        display: 'none'
      }

    return (
      <div className="types" ref="wrap">
        <span onClick={this.select}>全部</span>
        <i className="iconfont icon-down" onClick={this.select}></i>
        <ul className="box" style={style}>
          {source.map(item => <li
              key={item.type}
              className={selectType == item.type? 'active':''}
              onClick={() => this.click(item.type)}
              >{item.name}</li>)}
        </ul>
      </div>
    )
  }

})
