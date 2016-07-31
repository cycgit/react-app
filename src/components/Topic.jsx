import React from 'react'
import {get} from './util/ajax'
import {ftime} from './util'
import Reply from './Reply'
import Tab from './Tab'

var style = {
  marginTop: 10
}
export default React.createClass({

  getInitialState() {
    return {data: {replies: [], author:{}}}
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id) {
      get('https://cnodejs.org/api/v1/topic/' + nextProps.params.id, res => {
        this.setState({data: res.data})
      })
    }
  },
  componentDidMount() {
    get('https://cnodejs.org/api/v1/topic/' + this.props.params.id, res => {
      this.setState({data: res.data})
    })
  },
  createMarkup() {

    return {
      __html: this.state.data.content || ''
    }
  },
  render() {
    var d = this.state.data
    return (
      <div className="topic-wrapper">
        <div className="card">
          <h1>{d.title}</h1>
          <div className="user-info">
              <div className="avatar">
                  <img src={d.author.avatar_url} />
              </div>
              <div className="name">
                  <div>{d.author.loginname}</div>
                  <div className="time">{ftime(d.create_at)} 发布</div>
              </div>
              <div className="visit-count">
                  <Tab top={d.top} tab={d.tab}/>
                  <span>{d.visit_count}次浏览</span>
              </div>
          </div>

          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>

        <div className="reply-wrap">
            <div className="reply-staus">
                <span className="comments">评论 <em>{d.reply_count}</em></span>
            </div>
            <ul>
                {
                    d.replies.map(it => <Reply replay={it}/>)
                }
            </ul>
        </div>
      </div>

    )
  }
})
