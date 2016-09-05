import { get, post } from '../components/util/ajax'
export const toggleHeader = () => {
  return (dispatch, getState) => {
    dispatch({type: 'TOGGLE_HEADER'})
  }
}

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


export const fetchList = () =>{
  return (dispatch, getState) => {
    let page = getState().list.page
    let type = getState().header.type
    dispatch({
      type: 'FETCH_LIST',
      complate: false
    })
    get('https://cnodejs.org/api/v1/topics', {page, limit: 20, tab: type}, res => {
      dispatch({
        type: 'FETCH_LIST',
        complate: true,
        res: res
      })
    })
  }
}
