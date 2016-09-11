import React, {Component} from 'react'
import List from './List'

export default class Body extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.onFetchList()
  }
  onScroll(e){
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
