export default (state = {loading: false  , data: [], page: 1 }, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      if(action.complate == false){
        return Object.assign({}, state, {
          loading: true
        })
      }else {
        return Object.assign({}, state, {
          data: state.data.concat(action.res.data),
          page: state.page+1,
          loading: false
        })
      }
    case 'CHECK_TYPE':
      return Object.assign({}, state, {
        data:[],
        page: 1,
        loading: false
      })
    default: return state
  }
}
