import { get, post } from '../components/util/ajax'

//点击打开类型
export const toggleHeader = () => {
  return (dispatch, getState) => {
    dispatch({type: 'TOGGLE_HEADER'})
  }
}

//切换帖子类型
export const checkType = (typeName) =>{
  return (dispatch, getState) => {
    if(getState().header.type == typeName){
      dispatch(toggleHeader())
    }else{
      dispatch({type: 'CHECK_TYPE', typeName})
      dispatch(fetchList())
    }
  }
}

//获取帖子列表
export const fetchList = () =>{
  return (dispatch, getState) => {
    let page = getState().list.page
    let type = getState().header.type
    dispatch({
      type: 'FETCH_LIST',
      complate: false
    })
    get('https://cnodejs.org/api/v1/topics', {page, limit: 10, tab: type}, res => {
      dispatch({
        type: 'FETCH_LIST',
        complate: true,
        res
      })
    })
  }
}

//获取帖子内容
export const fetchTopic = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_TOPIC',
      complate: false
    })
    get(`https://cnodejs.org/api/v1/topic/${id}`, res => {
      dispatch({
        type: 'FETCH_TOPIC',
        complate: true,
        res
      })
    })
  }
}
