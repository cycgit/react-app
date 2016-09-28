import React, { Component } from 'react'
import List from './List'

export default class Body extends Component {
  // 页面首次加载数据
  componentDidMount() {
    this.props.onFetchList()
  }

  // 页面滚动事件
  onScroll(e) {
    if(!this.props.loading){
    let dom = this.refs.body
    var sHeight = dom.scrollHeight
    var cHeight = dom.clientHeight
    var sTop = dom.scrollTop
    var diff = sHeight - cHeight - sTop
      if(diff<20){
        this.props.onFetchList()
      }
    }
  }

  render() {
    let { onFetchList, page, data, loading, show } = this.props
    return (
        <div className="body" ref="body" onScroll={(e) => this.onScroll(e)} style={{display: show}}>
          <ul className="content-list">
            {data.map(it => <List key={it.id} d={it}/>)}
            {loading
              ? <li className="loading-li">
                  <i className="loading"></i>
                </li>
              : null}
          </ul>
        </div>
    )
  }
}
