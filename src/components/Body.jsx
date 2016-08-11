import React from 'react'
import List from './List'
import {get, post} from './util/ajax.js'

// post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: '7b71f388-e636-4db0-9e44-7fd43bc038be'}, res =>{
//     console.log(res)
// })

export default React.createClass({
  getInitialState() {
    return {
        items: [],
        loading: true,
        page: 0,
        body: window.document.body,
        flag: null,
        type: this.props.type
    }
  },
  componentWillReceiveProps(){
      
  },
  componentDidMount() {
    // document.body.onScroll = this.scroll

    this.loadDate()
    window.document.body.onscroll = this.scroll

  },
  loadDate() {
    this.setState({loading: true})
    get('https://cnodejs.org/api/v1/topics', {
      page: this.state.page + 1,
      limit: 10,
      tab: this.state.type,
      mdrender: false
    }, res => {
      this.setState({
        items: this.state.items.concat(res.data),
        loading: false,
        page: this.state.page + 1
      })
    })
  },
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
