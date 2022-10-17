import { SerializedError } from '@reduxjs/toolkit'

type TEditableUserProperties = 'name' | 'age' | 'aboutPerson'

interface IUser {
  id: string
  name?: string
  age?: number
  aboutPerson?: string
}

interface IUserState {
  userPending: boolean
  user?: IUser
  userError: string | null | SerializedError
}

interface ISetCurrentUserData {
  property: TEditableUserProperties
  value: string
}

export type { IUser, IUserState, ISetCurrentUserData }
