import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { fetchList } from '../actions'
import Body from '../components/Body'


const mapStateToProps = (state) => {
  return {
    data: state.list.data,
    page: state.list.page,
    loading: state.list.loading
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
