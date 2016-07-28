import React from 'react'
import {ftime} from './util'


export default React.createClass({
    render(){
        var d = this.props.data
        return(
            <ul className="content-list">
                <li>
                    <div className="user-info">
                        <div className="avatar">
                            <img src={d.author.avatar_url} />
                        </div>
                        <div className="name">

                            <div>{d.author.loginname}</div>
                            <div className="time">{ftime(d.create_at)}</div>
                        </div>
                        <div className="favorite">
                            <i className="iconfont icon-star"></i>
                        </div>
                    </div>
                    <div>
                        {d.title}
                    </div>
                </li>
            </ul>
        )
    }
})
