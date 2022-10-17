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

import { IGetAllUsersResponse, usersApi } from 'src/api/apis'
import { IUser } from 'src/store/ducks/user/types'

import { usersFetch, usersSuccess, usersFailure } from '../reducers'

export function* getUsersWorker(
  action: PayloadAction,
): Generator<
  | CallEffect<AxiosResponse<IGetAllUsersResponse, any>>
  | PutEffect<PayloadAction<IUser[]>>
  | PutEffect<PayloadAction<string>>,
  void,
  SagaReturnType<() => AxiosResponse<IUser[], any>>
> {
  try {
    const data = yield call(usersApi.getAll)
    yield put(usersSuccess(data.data))
  } catch (e) {
    yield put(usersFailure(e as string))
  }
}

export function* getUsersWatcher(): Generator<
  ForkEffect<PayloadAction>,
  void,
  PayloadAction
> {
  yield takeEvery(usersFetch, getUsersWorker)
}
