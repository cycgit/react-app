import React from 'react'
import {get} from './util/ajax'
import {ftime} from './util'
import Reply from './Reply'
import Tab from './Tab'

export default React.createClass({
  componentDidMount(){
    this.props.onFetchTopic(this.props.id)

  },
  createMarkup() {
    return {
      __html: this.props.data.content || ''
    }
  },
  render(){
    let d = this.props.data
    if(!d.author) {
      d.author = {}
    }
    d.replies = d.replies? d.replies : []

    if(this.props.loading){
      return <div className="laoding-wrap"><i className="loading"></i></div>
    }

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
                    d.replies.map(it => <Reply replay={it} key={it.id}/>)
                }
            </ul>
        </div>
      </div>
    )
  }
})
