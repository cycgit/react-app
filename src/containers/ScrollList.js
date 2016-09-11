import React from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../actions'
import Body from '../components/Body'


const mapStateToProps = (state, ownProps) => {
  let {data, page, loading} = state.list
  let show = ownProps.show
  return {
    data,
    page,
    loading,
    show
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchList(){
      dispatch(fetchList())
    }
  }
}


const ScrollList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Body)

export default ScrollList
