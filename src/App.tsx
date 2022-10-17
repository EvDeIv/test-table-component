import { FC, useEffect, useCallback } from 'react'

import { useDispatch } from 'react-redux'

import Table, { IDataItem } from 'src/components/Table'
import { useAppSelector } from 'src/store'
import {
  deleteUserFetch,
  setNewCurrentUser,
  resetCurrentUser,
  setCurrentUserData,
} from 'src/store/ducks/user/reducers'
import {
  addDraftUser,
  deleteUser,
  usersFetch,
} from 'src/store/ducks/users/reducers'

import TableActions from './components/TableActions'
import TextInput from './components/TextInput'
import { Layout } from './styled'

const columns = [
  {
    accessor: 'id',
    header: 'ID',
    width: 83,
  },
  {
    accessor: 'name',
    header: 'Name',
    width: 171,
  },
  {
    accessor: 'age',
    header: 'Age',
    width: 166,
  },
  {
    accessor: 'aboutPerson',
    header: 'About Person',
    width: 170,
  },
  {
    accessor: 'actions',
    header: 'Actions',
    width: 120,
  },
]

const App: FC = () => {
  const { error, pending, users } = useAppSelector((state) => state.users)
  const { userError, userPending, user } = useAppSelector(
    (state) => state.currentUser,
  )
  console.log('userLoad: ', userPending)
  console.log('user: ', user)

  const dispatch = useDispatch()

  const handleAdd = (): void => {
    if (users.filter((el) => el.id === 'New').length) return
    dispatch(addDraftUser())
    dispatch(setNewCurrentUser())
  }

  const handleDeleteUser = (id: string): void => {
    console.log('delete', id)
    if (id === 'New') {
      dispatch(deleteUser(id))
      dispatch(resetCurrentUser())

      return
    }
    dispatch(deleteUserFetch(id))
  }

  const prepareTableData = useCallback((): IDataItem[] => {
    return users
      ? users.map((el) => {
          return {
            ...el,
            name: (
              <TextInput
                value={user?.id !== el.id || userPending ? el.name : user?.name}
                disabled={user?.id !== el.id || userPending}
              />
            ),
            actions: (
              <TableActions
                handleEdit={() => {
                  console.log('edit')
                }}
                handleDelete={() => {
                  handleDeleteUser(el.id)
                }}
                handleSubmit={() => {
                  console.log('submit')
                }}
                isEditable={user?.id === el.id && !userPending}
                loading={user?.id === el.id && userPending}
              />
            ),
          }
        })
      : []
  }, [user, users])

  useEffect(() => {
    dispatch(usersFetch())
  }, [])

  return (
    <Layout>
      <Table
        loading={pending}
        columns={columns}
        data={prepareTableData()}
        handleAdd={handleAdd}
      />
    </Layout>
  )
}

export default App
