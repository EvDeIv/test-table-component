import { SerializedError } from '@reduxjs/toolkit'

import { IUser } from 'src/store/ducks/user/types'

export interface IUsersState {
  pending: boolean
  users: IUser[]
  error: string | null | SerializedError
}
