import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  put,
  call,
  takeEvery,
  PutEffect,
  CallEffect,
  SagaReturnType,
  ForkEffect,
} from 'redux-saga/effects'

import { IDeleteUserResponse, usersApi } from 'src/api/apis'
import { deleteUser } from 'src/store/ducks/users/reducers'

import { deleteUserFetch, userSuccess, userFailure } from '../reducers'

export function* deleteUsersWorker(
  action: PayloadAction<string>,
): Generator<
  | CallEffect<AxiosResponse<IDeleteUserResponse, any>>
  | PutEffect<PayloadAction>
  | PutEffect<PayloadAction<string>>
  | PutEffect<PayloadAction<string>>,
  void,
  SagaReturnType<() => AxiosResponse>
> {
  try {
    console.log('saga')
    const data = yield call(() => usersApi.delete(action.payload))
    console.log(data)
    if (data.status === 200) yield put(deleteUser(action.payload))
    yield put(userSuccess())
  } catch (e) {
    yield put(userFailure(e as string))
  }
}

export function* deleteUsersWatcher(): Generator<
  ForkEffect<PayloadAction<string>>,
  void,
  PayloadAction<string>
> {
  yield takeEvery(deleteUserFetch, deleteUsersWorker)
}
