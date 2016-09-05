import { combineReducers } from 'redux'
import header from './header'
import list from './list'
const reducers = combineReducers({
  header,
  list
})

export default reducers
