import { all } from 'redux-saga/effects'

import { deleteUsersWatcher } from 'src/store/ducks/user/sagas/deleteUserSaga'
import { getUsersWatcher } from 'src/store/ducks/users/sagas/getUsersSaga'

export function* rootWatcher(): Generator {
  yield all([getUsersWatcher(), deleteUsersWatcher()])
}
