// 帖子详情
import React from 'react'
import { connect } from 'react-redux'
import { fetchTopic } from '../actions'
import Topic from '../components/Topic'

const mapStateToProps = (state, ownProps) => {
  let {data, loading} = state.topic
  let id = ownProps.params.id
  return {
    data,
    loading,
    id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTopic(id){
      dispatch(fetchTopic(id))
    }
  }
}

const TopicContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic)

export default TopicContent
