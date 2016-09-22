export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TOPIC':
    if(action.complate == false){
      return Object.assign({}, state, {
        loading: true
      })
    }else{
      return Object.assign({}, state, {
        loading: false,
        data: action.res.data
      })
    }
    default:
      return state
  }
}
