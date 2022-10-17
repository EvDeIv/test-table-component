import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISetCurrentUserData, IUserState } from './types'

const initialUsersState: IUserState = {
  userPending: false,
  userError: null,
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    deleteUserFetch(state, action: PayloadAction<string>) {
      state.userPending = true
      state.userError = null
      state.user = { id: action.payload }
    },
    userSuccess(state) {
      state.userPending = false
      state.userError = null
    },
    userFailure(state, action: PayloadAction<string>) {
      state.userError = action.payload
    },
    setNewCurrentUser(state) {
      state.user = { id: 'New' }
    },
    resetCurrentUser(state) {
      delete state.user
    },
    setCurrentUserData(state, action: PayloadAction<ISetCurrentUserData>) {
      if (state.user?.id)
        state.user = {
          ...state.user,
          [action.payload.property]: action.payload.value,
        }
    },
  },
})

export const userReducer = userSlice.reducer
export const {
  deleteUserFetch,
  userSuccess,
  userFailure,
  setNewCurrentUser,
  resetCurrentUser,
  setCurrentUserData,
} = userSlice.actions
