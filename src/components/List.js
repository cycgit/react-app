import React from 'react'
import { ftime } from './util'
import Tab from './Tab'
import { Link } from 'react-router'
require('../style/app.scss')

const List = ({ d }) => (
  <li>
    <Link to={'/topic/'+d.id}>
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
            <b>{d.reply_count}</b>
            <i>/</i>
            {d.visit_count}
          </span>
        </div>

      </div>
      <p className="title-line">
        {d.title}
        <Tab tab={d.tab} top={d.top} />
      </p>
    </Link>
  </li>
)

export default List
