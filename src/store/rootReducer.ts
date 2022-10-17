import { combineReducers } from 'redux'

import { userReducer as currentUser } from './ducks/user/reducers'
import { usersReducer as users } from './ducks/users/reducers'

export const rootReducer = combineReducers({
  users,
  currentUser,
})
