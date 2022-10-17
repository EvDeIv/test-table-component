import { FC } from 'react'

import SVG from 'react-inlinesvg'

import {
  IconCheckboxChecked,
  IconEditLight,
  IconTrash,
} from 'src/common/assets/icons'
import Loader from 'src/components/Loader'

import { IconContainer } from './styled'

interface ITableActions {
  handleEdit?: () => void
  handleDelete?: () => void
  handleSubmit?: () => void
  loading?: boolean
  isEditable?: boolean
}

const TableActions: FC<ITableActions> = ({
  handleEdit,
  handleDelete,
  handleSubmit,
  loading,
  isEditable,
}) => {
  return (
    <IconContainer>
      {loading ? (
        <Loader size={21} />
      ) : (
        <>
          {!!handleEdit && !isEditable && (
            <SVG src={IconEditLight} onClick={handleEdit} />
          )}
          {!!handleSubmit && isEditable && (
            <SVG src={IconCheckboxChecked} onClick={handleSubmit} />
          )}

          {!!handleDelete && <SVG src={IconTrash} onClick={handleDelete} />}
        </>
      )}
    </IconContainer>
  )
}

export default TableActions
