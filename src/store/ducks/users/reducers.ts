import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from 'src/store/ducks/user/types'

import { IUsersState } from './types'

const initialUsersState: IUsersState = {
  pending: false,
  users: [],
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    usersFetch(state, action: PayloadAction) {
      state.pending = true
      state.error = null
    },
    usersSuccess(state, action: PayloadAction<IUser[]>) {
      state.pending = false
      state.error = null
      state.users = action.payload
    },
    usersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter(
        (item: IUser) => item.id !== action.payload,
      )
    },
    addDraftUser(state) {
      state.users.push({ id: 'New' })
    },
  },
})

export const usersReducer = usersSlice.reducer
export const {
  usersFetch,
  usersSuccess,
  usersFailure,
  deleteUser,
  addDraftUser,
} = usersSlice.actions
