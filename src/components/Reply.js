import React, { Component } from 'react'
import { ftime } from './util'

export default class Replay extends Component {
  // 返回原生html
  createMarkup() {
    return {
      __html: this.props.replay.content || ''
    }
  }

  render() {
    let d = this.props.replay
    return (
      <li>
        <div className="reply-avatar">
          <img src={d.author.avatar_url}/>
        </div>
        <div className="reply-content">
          <div className="name">{d.author.loginname}</div>
          <div className="time">{ftime(d.create_at)}</div>
          <div className="reply-text" dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
        <div className="reply-icon">
          <i className="iconfont icon-message"></i>
        </div>
      </li>
    )
  }
}
