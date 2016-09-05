import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { toggleHeader, checkType } from '../actions'

const mapStateToProps = (state) => {
  return {
    header: state.header,
    source: [
      {
        type: 'all',
        name: '全部'
      },
      {
        type: 'job',
        name: '工作'
      },
      {
        type: 'share',
        name: '分享'
      },
      {
        type: 'ask',
        name: '问答'
      }
    ]
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggle: () => dispatch(toggleHeader()),
    onCheck: (typeName) => dispatch(checkType(typeName))

  }
}


const HeaderState = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderState
