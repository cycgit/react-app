import { combineReducers } from 'redux'
import header from './header'
import list from './list'
import topic from './topic'
const reducers = combineReducers({
  header,
  list,
  topic
})

export default reducers
