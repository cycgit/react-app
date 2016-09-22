export default (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_HEADER':
      return {type: state.type, open: !state.open}
    case 'CHECK_TYPE':
      return { type:action.typeName, open: false }
    default:
      return state
  }
}
