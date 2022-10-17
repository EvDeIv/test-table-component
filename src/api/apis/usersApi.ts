import { IUser } from 'src/store/ducks/user/types'

import api from '../config'

export interface IGetAllUsersResponse {
  status: number
  data: IUser[]
}
export interface IDeleteUserResponse {
  status: number
}

export const usersApi = {
  getAll: () => api.get<IGetAllUsersResponse>(`/users`),
  delete: (id: string) => api.delete<IDeleteUserResponse>(`/users/${id}`),
}
