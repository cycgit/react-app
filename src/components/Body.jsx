import React, {Component} from 'react'
import List from './List'

export default class Body extends Component {
  componentDidMount() {
    this.props.onFetchList()
  }
  render() {
    let {onFetchList, page, data, loading} = this.props
    return (
      <div className="body">
        {/* <h1 onClick={onFetchList}>click</h1> */}
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

// const Body = ({onFetchList, page, data, loading}) => (
//   <div className="body">
//           <ul className="content-list">
//             {
//               data.map(it => <List key={it.id} d={it}/>)
//             }
//             {loading ? <li className="loading-li"><i className="loading"></i></li> : null}
//          </ul>
//   </div>
// )
//
// export default Body
