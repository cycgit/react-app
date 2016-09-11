import React from 'react'
import {ftime} from './util'
import Tab from './Tab'

require('../style/app.scss')

const List = ({d}) => (

  <li>
    <div className="user-info">
      <div className="avatar">
        <img src={d.author.avatar_url}/>
      </div>
      <div className="name">
        <div>{d.author.loginname}</div>
        <div className="time">{ftime(d.create_at)}</div>

      </div>
      <div className="favorite">
        <i className="iconfont icon-star"></i>
        <span className="status">
          <b>
          {d.reply_count}
          </b>
          <i>/</i>
          {d.visit_count}
        </span>
      </div>
    </div>
    <p className="title-line">
      {d.title}
      <Tab tab={d.tab} top={d.top}/>
    </p>
  </li>
)

export default List
