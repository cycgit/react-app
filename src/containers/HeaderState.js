import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { toggleHeader, checkType, reloadPage } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    header: state.header,
    show: ownProps.show,
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
    onCheck: (typeName) => dispatch(checkType(typeName)),
    onBack: () => {ownProps.back()},
    onReload: () => dispatch(reloadPage(ownProps.show))
  }
}


const HeaderState = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderState
