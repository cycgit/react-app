import React, { Component } from 'react'

export default class Tab extends Component {
  render() {
    let x = null
    let {tab, top} = this.props
    let style = {
      backgroundColor: '',
      color: '#fff'
    }
    let topStyle = {
      backgroundColor: '#E01515',
      color: '#fff'
    }
    if (tab == 'share') {
      x = '分享'
      style.backgroundColor = '#2db7f5'
    } else if (tab == 'job') {
      x = '工作'
      style.backgroundColor = '#01B3CA'
    } else if (tab == 'good') {
      x = '精华'
      style.backgroundColor = '#5FBC29'
    } else if (tab == 'ask') {
      x = '问答'
      style.backgroundColor = '#FAC450'
    } else {
      x = ''
    }

    return (
      <span>
        { top ? (<span style={topStyle} className="tab">置顶</span>) : null}
        <span style={style} className="tab">{x}</span>
      </span>
    )
  }
}
