import React from 'react'

require('../style/types.scss')

const Types = ({source, header, onToggle, onCheck}) => {
  return (
  <div className="types">
    <span onClick={e => onToggle()}>{source.filter(it => it.type == header.type)[0].name}</span>
    <i className="iconfont icon-down"></i>
    <ul className="box" style={{display: header.open? 'block': 'none'}}>
      {source.map(item => <li
          key={item.type}
          className={header.type == item.type? 'active':''}
          onClick={e =>  onCheck(item.type)}
          >{item.name}</li>)}
    </ul>
  </div>
)}
export default Types
