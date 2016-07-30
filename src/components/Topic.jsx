import React from 'react'
import {get} from './util/ajax'
import Reply from './Reply'
var style = {
  marginTop: 10
}
export default React.createClass({

  getInitialState() {
    return {data: {replies: []}}
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
          <hr></hr>
          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>

        <div className="reply-wrap">
            <div className="reply-staus">

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
