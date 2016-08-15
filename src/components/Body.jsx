import React from 'react'
import List from './List'
import {get, post} from './util/ajax.js'

// post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: '7b71f388-e636-4db0-9e44-7fd43bc038be'}, res =>{
//     console.log(res)
// })

export default React.createClass({

  scroll(e) {
    let {loading, body} = this.state
    let {show} = this.props
    if (!loading && show) {
      var dom = body
      var sHeight = dom.scrollHeight
      var cHeight = window.screen.height
      var sTop = dom.scrollTop
      var diff = sHeight - cHeight - sTop
      if (diff < 10) {
        this.loadDate()
      }

    }

  },
  render() {
    let {items, loading} = this.state
    let {show} = this.props
    let style  = show ? null: {display: 'none'}
    return (
      <div className="body" ref="body" style={style}>
        <ul className="content-list">
          {items.map(item => <List data={item} key={item.id}></List>)}
          <li className="loading-li"><i className="loading"></i></li>
        </ul>
      </div>
    )
  }
})
